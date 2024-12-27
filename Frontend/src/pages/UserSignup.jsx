import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt="logo"
        />
        <form
          onSubmit={(event) => {
            submitHandler(event);
          }}
          action=""
        >
          <h3 className="text-lg font-medium mb-2">What's your full name?</h3>
          <div className="flex gap-3 mb-6">
            <input
              required
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
            />
            <input
              required
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">Enter email address</h3>
          <input
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline font-medium">Google Privacy Policy</span>{" "}
          and <span className="underline font-medium">Terms of Service</span>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
