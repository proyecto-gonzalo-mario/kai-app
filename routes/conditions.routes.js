const constants = require('../constants');
const express = require('express');
const router = express.Router();
const conditionsController = require('../controllers/conditions.controller');
const completenessMiddleware = require('../middlewares/completed.middleware');

router.get('/', completenessMiddleware.checkCompleteness, conditionsController.checkConditions);

module.exports = router;