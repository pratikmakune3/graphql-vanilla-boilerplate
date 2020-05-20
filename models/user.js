module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      "user",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        password: Sequelize.STRING,
      },
    );

    return User;
  };