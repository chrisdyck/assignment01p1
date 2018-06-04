const url = require('url');
const DataContext = require('../models/DataContext');

exports.index = (req, res, next) => {
    const queryString = url.parse(req.url, true).query;

    res.render('index', { title: 'Family Members', Model: { FamilyMembers : DataContext.FamilyMembers } });
};
