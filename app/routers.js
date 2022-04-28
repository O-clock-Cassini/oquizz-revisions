const express = require('express');
const levelController = require('./controllers/levelController');
const mainController = require('./controllers/mainController');

const router = express.Router();

router.get('/', mainController.homePage);


router.get('/levels', levelController.all);
router.get('/levels/delete/:id', levelController.delete);
router.get('/levels/demoCreate', levelController.create);

router.get('/levels/:id', levelController.get);

module.exports = router;