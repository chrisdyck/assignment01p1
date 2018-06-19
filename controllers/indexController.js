const url = require('url');
const DataContext = require('../models/DataContext');

exports.index = (req, res, next) => {
    res.render('index', { title: 'My Portfolio', Model: { FamilyMembers: DataContext.FamilyMembers } });
};

exports.contact = (req, res, next) => {
    res.render('contact', { title: 'Contact Me!', Model: {} });
};

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.contactPost = (req, res, next) => {
    response = {
        name: req.body.Name,
        email: req.body.Email
    };
    console.log(response);
    res.render('contactPost', { title: 'Contact Me!', Model: { response } });

    //res.end(JSON.stringify(response));
};
