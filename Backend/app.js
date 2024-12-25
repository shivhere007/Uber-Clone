const express = require("express"); // Import the express package
const app = express();
const dotenv = require("dotenv"); // Import the dotenv package
dotenv.config();
const cors = require("cors"); // Import the cors package
const connectToDb = require("./db/db.js"); // Import the connectToDb function from the db.js file
connectToDb();
const userRouter = require("./routes/user.route.js"); // Import the userRouter from the user.route.js file

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRouter);

module.exports = app;
