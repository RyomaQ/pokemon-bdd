const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.create);
router.get('/', userController.findAll);
router.delete('/:userId', userController.delete);
router.get('/:userId', userController.findOne);
router.put('/:userId', userController.update);
router.post('/login', userController.login);

module.exports = router;