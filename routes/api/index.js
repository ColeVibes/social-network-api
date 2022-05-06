const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes')

//adds /users to the callback
router.use('/users', userRoutes);

//adds /thoughts to the callback
router.use('/thoughts', thoughtRoutes);

module.exports = router;