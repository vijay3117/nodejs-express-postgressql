module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        is_active: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    Users.sync({ force: false }).then(() => console.log("User table created")).catch(err => {
        console.log(err)
    });


    return Users;
};