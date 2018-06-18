var express = require('express');

const familyController = require('../controllers/familyController');

var router = express.Router();

router.get('/family', familyController.index);
router.get('/family/:name', familyController.detail);


module.exports = router;
