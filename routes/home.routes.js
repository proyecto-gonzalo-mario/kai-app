const constants = require('../constants');
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');
const completenessMiddleware = require('../middlewares/completed.middleware');

router.get('/', homeController.drawHome);

module.exports = router;