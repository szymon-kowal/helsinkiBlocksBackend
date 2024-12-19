const express = require("express");
const logger = require("./utils/logger");
const config = require("./utils/config");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const middleware = require("./utils/middleware");
const blogsRouter = require("./controllers/blogs");

const mongoUrl = config.MONGODB_URI;

console.log("connecting to", mongoUrl);

mongoose.set("strictQuery", false);

mongoose
    .connect(mongoUrl)
    .then(() => {
        logger.info("Connected to MongoDB");
    })
    .catch((error) => {
        logger.error("Error connecting to MongoDB:", error.message);
    });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use("/api/blogs", blogsRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
