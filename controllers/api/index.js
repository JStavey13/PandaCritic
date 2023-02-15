const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foods = require('./food-routes')

router.use('/users', userRoutes);
router.use('/foods', foods);
module.exports = router;
