// Получаем роутер из экспресса
const Router = require('express');
// Создаем объект роутера
const router = new Router();
// Импортируем контроллер
const brandController = require('../controllers/brandController');
const checkRole = require('../middleware/checkRoleMiddleware');

// Создаем бренды
router.post('/', checkRole('ADMIN'), brandController.create);
// Получаем бренды
router.get('/', brandController.getAll);
// Удаляем бреднды
router.delete('/', brandController.getAll);

module.exports = router;