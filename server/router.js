const router = require('express').Router();
const controller = require('./controller');

router.get('/stocks', controller.getStock);

module.exports = router;
