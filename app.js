const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize"); //for noSql query injections
const xss = require("xss-clean"); //for XSS attack (remove script tags
const app = express();
const userRoutes = require("./routes/userRoute");

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1hr
    max: 1000, // limit each IP to 100 requests per windowMs
    message: "you've exceed the number of requests",
  });
  
  
 var options = {
      "origin": "*",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204
}

//middlewares
app.use(limiter)
app.use(express.json());
app.use(mongoSanitize())  
app.use(xss()) 
app.use(cors(options));


app.use("/api/user",userRoutes);

module.exports = app;