// подключаем dotenv конфигурацию
require('dotenv').config();
// подключаем express
const express = require('express');
// импортируем объект подключения к БД
const sequelize = require('./db');
// импортируем порт из настроек .env
const PORT = process.env.PORT || 5000;
// объявляем переменную приложения
const app = express();

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();