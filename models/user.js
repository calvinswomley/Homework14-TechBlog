//sequelize import
const { Model, DataTypes } = require('sequelize');
//db connection import
const sequelize = require('../config/connection');

//extend model
class User extends Model { }  // add bcrypt password check here

//User model setup

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {}
        }
    }
)