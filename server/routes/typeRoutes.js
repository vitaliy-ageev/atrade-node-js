// Получаем роутер из экспресса
const Router = require('express');
// Создаем объект роутера
const router = new Router();
// Импортируем контроллер
const typeController = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

// Создаем типы
router.post('/', checkRole('ADMIN'), typeController.create);
// Получаем типы
router.get('/', typeController.getAll);
// Удаляем типы
router.delete('/', typeController.getAll);

module.exports = router;