const url = require('url');
const DataContext = require('../models/DataContext');

exports.index = (req, res, next) => {
    res.render('index', { title: 'My Portfolio', Model: { FamilyMembers : DataContext.FamilyMembers } });
};

exports.contact = (req, res, next) => {
    res.render('contact', { title: 'Contact Me!', Model: { } });
};
