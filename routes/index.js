var express = require('express');

const indexController = require('../controllers/indexController');

var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', indexController.index);
router.get('/contact', indexController.contact);
router.post('/contact', indexController.contactPost)


module.exports = router;
