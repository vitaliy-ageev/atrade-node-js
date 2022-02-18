// подключаем dotenv конфигурацию
require('dotenv').config();
// подключаем express
const express = require('express');
// импортируем объект подключения к БД
const sequelize = require('./db');
// импортируем модель
const models = require('./models/models');
// Импортируем Корс для веб запросов
const cors = require('cors');
// Импортируем файл для работы с файлами
const fileUpload = require('express-fileupload');
// Импортируем основной роутер
const router = require('./routes/index');
// Регистрируем мидлвейр ошибок
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
// Подгружаем модель путей
const path = require('path');
// импортируем порт из настроек .env
const PORT = process.env.PORT || 5000;
// объявляем переменную приложения
const app = express();
// Настраиваем обработку веб запросов с браузера
app.use(cors());
// Разрешаем парсить json формат
app.use(express.json());
// Запускаем статичные методы
app.use(express.static(path.resolve(__dirname, 'static')));
// Регистрируем метод загрузки файлов
app.use(fileUpload({}));
// Запускаем основной роутер
app.use('/', router);
// Запускаем обработчик ошибок (самый последний)
app.use(errorHandler);

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