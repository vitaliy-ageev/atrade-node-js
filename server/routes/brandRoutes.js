// Получаем роутер из экспресса
const Router = require('express');
// Создаем объект роутера
const router = new Router();
// Импортируем контроллер
const brandController = require('../controllers/brandController');

// Создаем бренды
router.post('/', brandController.create);
// Получаем бренды
router.get('/', brandController.getAll);
// Удаляем бреднды
router.delete('/', brandController.getAll);

module.exports = router;