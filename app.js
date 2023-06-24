require("dotenv").config();

const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/cors");
const app = express();
const cookieParser = require("cookie-parser");
// const connectToDb = require("./config/database");
const { errorHandler } = require("./middleware/errorHandler");

const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const configRoutes = require("./routes/configRoutes");

// connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/API/config", configRoutes);
app.use("/API/users", userRoutes);
app.use("/API/reviews", reviewRoutes);

app.use(errorHandler);

module.exports = app;
