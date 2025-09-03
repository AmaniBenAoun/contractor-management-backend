const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false },
    keepAlive: true,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
  logging: false,
});

module.exports = { sequelize };
