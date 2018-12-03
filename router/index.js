/**
 * router管理路由器模块
 */

const express = require('express') ;
const router = new express.Router();


router.get('/' , (req,res) => {
  res.send('这是服务器发来的响应')
});

module.exports = router;
