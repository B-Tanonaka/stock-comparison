const router = require('express').Router();
const controller = require('./controller');

router.get('/stocks', controller.getStock);
router.get('/stocks/name', controller.getName);

module.exports = router;
