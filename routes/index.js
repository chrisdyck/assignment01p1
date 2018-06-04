var express = require('express');

const indexController = require('../controllers/indexController');
const familyController = require('../controllers/familyController');

var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get(['/', '/index', '/home'], indexController.homePage);
router.get('/', indexController.index);
router.get('/family', familyController.index);


module.exports = router;
