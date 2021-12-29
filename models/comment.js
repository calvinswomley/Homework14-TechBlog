const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    comment_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Post",
            key: "id",
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id",
        },
    },
    creation_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Comment",
  }
);

module.exports = Comment
