const express = require('express');
const router = express.Router();
const PkmController = require('../controllers/PkmController');
const auth = require('../middleware/auth');

// Create a new Pkm
router.post('/post', auth , PkmController.create);
router.get('/', PkmController.findAll);
router.delete('/:pkmId', auth , PkmController.delete);
router.get('/:pkmId', PkmController.findOne);
router.put('/:pkmId', PkmController.update);

module.exports = router;