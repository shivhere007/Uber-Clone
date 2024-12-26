const express = require("express"); // Import the express package
const app = express();
const dotenv = require("dotenv"); // Import the dotenv package
dotenv.config();
const cookieParser = require("cookie-parser"); // Import the cookie-parser package
const cors = require("cors"); // Import the cors package
const connectToDb = require("./db/db.js"); // Import the connectToDb function from the db.js file
connectToDb();
const userRoutes = require("./routes/user.routes.js"); // Import the userRouter from the user.route.js file
const captainRoutes = require("./routes/captain.routes.js"); // Import the captainRouter from the captain.route.js file

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
