const constants = require('../constants');
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const completenessMiddleware = require('../middlewares/completed.middleware');


router.get('/', authMiddleware.isAuthenticated, completenessMiddleware.checkCompleteness, usersController.list);
router.get('/verify/:token', usersController.verify);
router.get('/create', usersController.create);
router.post('/create', usersController.doCreate);
router.get('/edit', authMiddleware.isAuthenticated, usersController.list);
router.post('/edit', authMiddleware.isAuthenticated, usersController.doEdit);
router.post('/:id/delete', 
  authMiddleware.isAuthenticated, 
  authMiddleware.checkRole(constants.ROLE_ADMIN), 
  usersController.doDelete);

module.exports = router;

//completenessMiddleware.checkCompleteness
