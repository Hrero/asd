
var express = require('express');

var router = express.Router();

var User = require('../models/User');
var Content = require('../models/Content');

//统一返回格式
var responseData;

router.use(function (req,res,next) {
    responseData = {
        code:0,
        message:''
    }
    next()
})

/*
* 注册逻辑
* 用户名格式验证（非数据库）
* 是否被注册
* 1.用户名不为空
* 2.密码不为空
* 3.两次输入密码必须一致
*
* 1.用户名是否已经被注册
*       数据库查询是否存在
 */
router.post('/user/register',function(req,res,next){
    // res.send('')
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
    if( username == '' ){
        responseData.code = 1;
        responseData.message = '用户名不能为空';
        res.json(responseData);
        return;
    }
    if( password == '' ){
        responseData.code = 2;
        responseData.message = '密码不能为空';
        res.json(responseData);
        return;
    }
    if( password != repassword ){
        responseData.code = 3;
        responseData.message = '两次输入的密码不一致';
        res.json(responseData);
        return;
    }

    //验证用户在数据库里面是否被注册
    User.findOne({
        username:username
    }).then(function (userInfo) {
        
        if( userInfo ){
            //数据库有记录
            responseData.code = 4;
            responseData.message = '用户名已经被注册';
            res.json(responseData);
            return;
        }
        //保存数据到数据库中
        var user = new User({
            username:username,
            password:password
        })
        return user.save();
    }).then(function (newuserInfo) {
        responseData.message = '注册成功';
        req.cookies.set('userInfo',JSON.stringify({
            _id:newuserInfo._id,
            username:newuserInfo.username
        }));

        res.json(responseData);
    })

});
//登lu
router.post('/user/login',function (req,res,next) {
    var username = req.body.username;
    var password = req.body.password;

    if( username == '' || password == '' ){
        responseData.code = 1;
        responseData.message = '用户名和密码不能为空';
        res.json(responseData);
        return;
    }

    //查询数据库中用户名和密码是否存在 如果存在则登陆成功
    User.findOne({
        username:username,
        password:password
    }).then(function (userInfo) {
        if(!userInfo){
            responseData.code = 2;
            responseData.message = '用户名或密码错误';
            res.json(responseData);
            return;
        }
        //正确的
        responseData.message = '登录成功';
        responseData.userInfo = {
            _id:userInfo._id,
            username:userInfo.username
        }
        req.cookies.set('userInfo',JSON.stringify({
            _id:userInfo._id,
            username:userInfo.username
        }));
        res.json(responseData);
        return;
    })

})
//退出登录
router.get('/user/logout',function (req,res,next) {

    responseData.message = '退出登录';
    req.cookies.set('userInfo',null);
    res.json(responseData);

})
//评论提交
router.post('/comment/post',function (req,res) {
    //内容的id
    var contentId = req.body.contentid || '';
    var postData = {
        username:req.userInfo.username,
        postTime:new Date(),
        content:req.body.content
    }
    //查询id和信息
    Content.findOne({
        _id:contentId
    }).then(function (content) {
        content.comments.push(postData);
        return content.save();
    }).then(function (newContent) {
        responseData.message = '评论成功';
        responseData.data = newContent;
        res.json(responseData);
    })

})
//获取当前文章的所有评论
router.get('/comment', function(req, res) {
    var contentId = req.query.contentid || '';

    Content.findOne({
        _id: contentId
    }).then(function(content) {
        responseData.data = content.comments;
        res.json(responseData);
    })
});


module.exports = router;