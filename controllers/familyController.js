const url = require('url');
const DataContext = require('../models/DataContext');
//const FamilyMember = require('../models/FamilyMember');




exports.index = (req, res, next) => {
    const queryString = url.parse(req.url, true).query;

    const { name } = queryString;

    console.log(name);
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
    else {
        res.render('family/index', { title: 'Family Members', Model: 
            { FamilyMembers: DataContext.FamilyMembers } });
    }
};


