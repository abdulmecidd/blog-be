var createError = require("http-errors");
var express = require("express");
const dbConnection = require("./config/db");
const postsRoute = require("./routes/posts");
var app = express();

dbConnection();
app.use(express.json());

app.use("/posts", postsRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
