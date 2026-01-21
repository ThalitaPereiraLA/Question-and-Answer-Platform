const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '1308CiTh!',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;