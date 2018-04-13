var mongoose = require('mongoose');

//用户的表结构

module.exports =  new mongoose.Schema({
    //用户表
    // 用户名 密码

    username : String,
    password : String,

    //是否是管理员的字段
    isAdmin:{
        type:Boolean,
        default:false
    }

})
