const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks", tasksRouter);
const path = require("path");

app.use("/static", express.static(path.join(__dirname, "public")));

module.exports = app;
