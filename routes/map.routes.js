const constants = require('../constants');
const express = require('express');
const router = express.Router();
const mapsController = require('../controllers/map.controller'); // controladores de MAP
const authMiddleware = require('../middlewares/auth.middleware'); // Autenticacion si loggeado
const completenessMiddleware = require('../middlewares/completed.middleware');


router.get('/', authMiddleware.isAuthenticated, completenessMiddleware.checkCompleteness, mapsController.showMap);

module.exports = router;
