/**
 * 入口js主文件：
 */

const express = require('express') ;
//把数据库模块、mongoose模块引入
const db = require('./db') ;
const router = require('./router') ;
const app = express();

(async () => {
  await db;
  //利用路由中间件做一些操作
  app.use(router);
})();

app.listen(4000 , err => {
  if(!err){
    console.log('服务器连接成功')
  }else{
    console.log(err)
  }
});



