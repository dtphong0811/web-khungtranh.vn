var controller = {};

var models = require('../models');

controller.getById = function(email, callback){
    models.User
    .findAll({ 
        where: {email: email},
    })
    .then(function(user){
        callback(user);
    });
};

// controller.add = function(article_id,new_cmt, callback){
//     models.Comment
//     .create({
//         comment: new_cmt,
//         ArticleId: article_id,
//     })
//     .then(function(comment){
//         callback(comment);
//     });
// };

controller.edit = function(email, password,address,phoneNum, callback){
    models.User
    .update({
        password:password,
        address: address,
        phoneNum: phoneNum
    },
    {
        where:{email:email}
    })
    .then(function(user){
        callback(user);
    });
};

controller.editAvt = function(email, imgAvt, callback){
    models.User
    .update({
       avtImg : imgAvt
    },
    {
        where:{email:email}
    })
    .then(function(user){
        callback(user);
    });
};

const itemsPerPage = 5;
controller.getAll = function (page, callback) {
    models.User
        .findAll({
            limit: itemsPerPage, offset: (page - 1) * itemsPerPage,
            order: [['id','ASC']]
        })
        .then(function (catalog) {
            callback(catalog);
        })
};

controller.banUser = function(userId, action, callback){
    models.User
    .update({
       status : action
    },
    {
        where:{id:userId}
    })
    .then(function(user){
        callback(user);
    });
};

controller.countUser = function (callback) {
    models.User.
    findAndCountAll({
       
    })
    .then(function (catalog) {
        callback(catalog);
    });
  }



controller.create
module.exports = controller;
