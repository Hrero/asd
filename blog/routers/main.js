
var express = require('express');

var router = express.Router();

var Category = require('../models/Category');
var Content = require('../models/Content');

var data;

//处理通用的数据
router.use(function (req,res,next) {
    data = {
        userInfo:req.userInfo,
        categories:[]
    }
    Category.find().then(function (categories) {
        data.categories = categories;
        next();
    })
})

router.get('/',function (req,res,next) {

    data.category = req.query.category || '';
    data.count = 0;
    data.page = Number(req.query.page || 1);
    data.limit = 3;
    data.pages = 0;

    var where = {};
    if( data.category ){
        where.category = data.category;
    }
    //读取分类信息
    Content.where(where).count().then(function (count) {

        data.count = count;
        data.pages = Math.ceil(data.count / data.limit);
        //取值不能超过pages
        data.page = Math.min( data.page, data.pages );
        //取值不能小于1
        data.page = Math.max( data.page, 1 );

        var skip = ( data.page - 1) *  data.limit;
        return Content.where(where).find().limit(data.limit).skip(skip).populate(['category','user']).sort({
            addTime:-1
        });

    }).then(function (contents) {
        data.contents = contents;
        res.render('main/index',data)

    })

})

router.get('/view',function (req,res,next) {
    var contentId = req.query.contentId || '';

    Content.findOne({
        _id:contentId
    }).then(function (content) {
        data.content = content;
        console.log(content)
        content.views++;
        content.save();
        res.render('main/view',data);
    })

})
module.exports = router;