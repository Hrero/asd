$(function () {

    var loginBox = $('#loginBox');
    var registerBox = $('#registerBox');
    var userInfo = $('#userInfo');
    var username = $('.username');
    loginBox.find('a').on('click',function () {
        registerBox.show();
        loginBox.hide();
    })

    registerBox.find('a').on('click',function () {
        registerBox.hide();
        loginBox.show();
    })

    registerBox.find('button').on('click',function (event) {
        //提交请求
        var Event = event;
        var that = $(this);
        $.ajax({
            type:'post',
            url:'/api/user/register',
            data:{
                username:registerBox.find('[name="username"]').val(),
                password:registerBox.find('[name="password"]').val(),
                repassword:registerBox.find('[name="repassword"]').val()
            },
            dataType:'json',
            success:function (result) {
                registerBox.find('.colWarning').html(result.message);
                if(!result.code){
                    setTimeout(function () {
                        window.location.reload()
                    },1000)
                }
            }
        })
    })

    loginBox.find('button').on('click',function () {
        //提交请求
        $.ajax({
            type:'post',
            url:'/api/user/login',
            data:{
                username:loginBox.find('[name="username"]').val(),
                password:loginBox.find('[name="password"]').val()
            },
            dataType:'json',
            success:function (result) {
                loginBox.find('.colWarning').html(result.message);
                if(!result.code){
                    //登陆成功
                    setTimeout(function(){
                        userInfo.find('.username').text(result.userInfo.username)
                        userInfo.find('.info').html('您好！欢迎光临我的博客！')
                        // loginBox.hide();
                        // userInfo.show();
                    },1000)
                    window.location.reload()
                }
            }
        })
    })

    $('#logout').click(function () {
        $.ajax({
            url:'/api/user/logout',
            success:function (result) {
                loginBox.find('.colWarning').html('您已退出登录');
                if(!result.code){
                    //退出登录
                    window.location.reload()
                }
            }
        })
    })

})