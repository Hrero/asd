var fs = require('fs');

var filedir = './miaov/source';

fs.watch(filedir,function (ev,file) {

    // console.log(ev+'/'+file)

    //只要有一个文件发生了变化 我们就需要对这个文件夹下的所有文件进行读取然后合并

    fs.readdir(filedir,function (err,dataList) {

        var arr = [];
        dataList.forEach(function (t) {
            if(t){
                var info = fs.statSync( filedir + '/'+ t);
                // console.log(t)
                if(info.mode == 33206){
                    arr.push(filedir + '/'+ t)
                }
            }

        })

        var content = '';
        arr.forEach(function (t) {
           var c = fs.readFileSync(t);
            content += c.toString() + '\n';

        })
        fs.writeFile('./miaov/js/index.js',content);


    })

})