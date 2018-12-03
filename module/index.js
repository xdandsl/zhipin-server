/**
 * 创建模型对象模块
 */

const mongoose = require('mongoose') ;

const usersSchema = new mongoose.Schema({

});

module.exports = mongoose.model('Users' , usersSchema);
