const userModel = require("../models/user.model.js");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  // Check if the email already exists
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const user = userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};
