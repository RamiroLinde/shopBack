const router = require('express').Router();

const { checkToken, checkAdmin, checkRole } = require('./middlewares');

const apiProductsRouter = require('./api/products');
const apiClientsRouter = require('./api/clients');
const apiUsersRouter = require('./api/users');
const apiPublicProductRouter = require('./api/publicProducts');

router.use('/products', checkToken, checkRole('A'), apiProductsRouter);
router.use('/public_products', apiPublicProductRouter);
router.use('/clients', checkToken, checkAdmin, apiClientsRouter);
router.use('/users', apiUsersRouter);

module.exports = router;