// импортируем Sequelize
const {Sequelize} = require('sequelize');

// экспортируем модуль и создаем новый объект Sequalize c настройками подключения к БД
module.exports = new Sequelize(
    process.env.DB_NAME, // название БД
    process.env.DB_USER, // пользователь
    process.env.DB_PASSWORD, // пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);