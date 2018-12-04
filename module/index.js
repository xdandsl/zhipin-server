/**
 * 创建模型对象模块
 */

const mongoose = require('mongoose') ;

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
      required: true,
      unique: true
  },
  password: {
    type: String,
      required: true,
  },
  type: {
    type: String,
      required: true
  }
});

module.exports = mongoose.model('Users' , usersSchema);
