const url = require('url');
const DataContext = require('../models/DataContext');

exports.index = (req, res, next) => {

        res.render('family/index', { title: 'Family Members', Model: 
            { FamilyMembers: DataContext.FamilyMembers } });
};

exports.detail = (req, res, next) => {
    const queryString = url.parse(req.url, true).query;

    // console.log("Family details reached...");
    const name = req.params.name; // queryString;

    // console.log(name);
    if (name !== null && name !== undefined) {
        let filteredFamilyMembers = DataContext.FamilyMembers.filter(family => {
            return (family.Name == name);
        });

        var item = filteredFamilyMembers.length > 0 ? filteredFamilyMembers[0] : DataContext.FamilyMembers[0];

        res.render('family/detail', 
            { title: 'Family Details', 
            Model: 
                { FamilyMembers: DataContext.FamilyMembers, FamilyMember: item } });
    }

    
};