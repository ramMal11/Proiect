"use strict";

const express = require('express')
const sequelize = require('./config/sequelize')
require("./models/student")

const app = express();
app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());

  app.use("/api", require("./routes/students"));

app.listen(7001, async() => {
    console.log("Server started on http://localhost:7001");
    try{
        await sequelize.authenticate();
        console.log("Connection has been established");
    } catch(err){
        console.error("Unable to connect to the database:", err);
    }
})

