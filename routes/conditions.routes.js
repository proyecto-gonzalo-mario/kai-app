const constants = require('../constants');
const express = require('express');
const router = express.Router();
const conditionsController = require('../controllers/conditions.controller');

router.get('/', conditionsController.checkConditions);

module.exports = router;