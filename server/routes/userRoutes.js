// Получаем роутер из экспресса
const Router = require('express');
// Создаем объект роутера
const router = new Router();
// Импортируем контроллер
const userController = require('../controllers/userController');

// Создаем пользователя
router.post('/registration', userController.registration);
// Авторизовываем пользователя
router.post('/login', userController.login);
// Получаем пользователя
router.get('/auth', userController.check);
// Удаляем пользователя
router.delete('/', userController.delete);

module.exports = router;