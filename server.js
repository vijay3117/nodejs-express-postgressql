const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require('./config/env');
// const db = require("./app/models");
const app = express();

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });



// Routes Configuration
require("./app/routes/login.routes")(app);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = env.development.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
