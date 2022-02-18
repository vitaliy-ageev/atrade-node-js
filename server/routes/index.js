// Получаем роутер из экспресса
const Router = require('express');
// Создаем объект роутера
const router = new Router();
const deviceRouter = require('./deviceRoutes');
const userRouter = require('./userRoutes');
const brandRouter = require('./brandRoutes');
const typeRouter = require('./typeRoutes');

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/type', typeRouter);

module.exports = router;