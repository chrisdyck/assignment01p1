var express = require('express');

const familyController = require('../controllers/familyController');

var router = express.Router();

router.get('/', familyController.index);
router.get('/:name', familyController.detail);


module.exports = router;
