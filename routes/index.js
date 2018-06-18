var express = require('express');

const indexController = require('../controllers/indexController');

var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', indexController.index);
router.get('/index', indexController.index);
router.get('/index/contact', indexController.contact);
router.get('/contact', indexController.contact);


module.exports = router;
