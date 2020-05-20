import Sequelize from 'sequelize';

// Option 1: Passing parameters separately
const sequelize = new Sequelize('prorail', 'root', 'root', {
  host: 'localhost',
  dialect: "mysql", /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const models = {
    User: sequelize.import('./user'),
    Address: sequelize.import('./address'),
};

// Loop thru' all the models and associate together
Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
