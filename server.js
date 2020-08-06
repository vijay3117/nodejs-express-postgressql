require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require('./config/env');
// const db = require("./app/models");
const app = express();

const corsOptions = {
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

// Password Generate
// req.body.password
const bcrypt = require('bcryptjs');
const password = '123';
const hashedPassword = bcrypt.hashSync(password, 8);
console.log('password->', hashedPassword);

const jwt = require('jsonwebtoken');
const user = {
  id: 1,
  username: 'vijay',
  email: 'vijay@gmail.com',
  role: 'admin'
};
const token = jwt.sign({ userId: user.id, username: user.email, type: user.role }, process.env.JWT_KEY, {
  expiresIn: 86400 // expires in 24 hours
});

console.log('jwt token->', token);

// Routes Configuration
require("./app/routes/login.routes")(app);


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to auth service" });
});

// set port, listen for requests
const PORT = env.development.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
