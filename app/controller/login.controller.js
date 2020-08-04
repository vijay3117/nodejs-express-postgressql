const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Request content cannot be empty!"
        });
        return;
    }

    // Create
    const users = {
        username: req.body.title,
        password: req.body.description,
        email: req.body.email
    };

    // Save
    Users.create(users)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred.. Please try later."
            });
        });
};

// Retrieve all data from the database.
exports.findAll = (req, res) => {

    Users.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred.. Please try later."
            });
        });
};

// Find by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Users.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with id=" + id
            });
        });
};
