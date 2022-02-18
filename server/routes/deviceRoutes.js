// Получаем роутер из экспресса
const Router = require('express');
// Создаем объект роутера
const router = new Router();
// Импортируем контроллер
const deviceController = require('../controllers/deviceController');

// Создаем девайсы
router.post('/', deviceController.create);
// Получаем девайсы
router.get('/', deviceController.getAll);
// Получаем девайс
router.get('/:id', deviceController.getOne);
// Удаляем девайсы
router.delete('/', deviceController.delete);

module.exports = router;