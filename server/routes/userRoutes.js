// Получаем роутер из экспресса
const Router = require('express');
// Создаем объект роутера
const router = new Router();

// Создаем пользователя
router.post('/registration',);
// Авторизовываем пользователя
router.post('/login',);
// Получаем пользователя
router.get('/auth', (req, res) => {
    res.json({message: 'Working'});
});
// Удаляем пользователя
router.delete('/',);

module.exports = router;