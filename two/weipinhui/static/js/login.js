// jQuery的入口函数
$(function() {
    // 当提交按钮（事实上并不是submit类型，而是button类型）被单击时，执行下面的函数
    $('#lg').click(function(event) {
        // 首先获取账户，用户输入的
        var usrName = $('#user-name').val();
        // 然后获取密码
        var usrPwd = $('#user-password').val();

        // 粗略判断用户输入的不是空字符串
        if (usrName != '' && usrPwd != '') {
            // 调用jquery的ajax方法，实现异步请求
            $.ajax({
                // type设置提交数据的方式，相当于form的method属性
                type: 'post',
                // url设置数据提交的目标路径，相当于form的action属性
                url: './static/js/ajax_login.php',
                // dataType设置提交数据的格式，text表示文本格式
                dataType: 'text',
                // data是要被提交到服务器去的数据，【键值对儿】形式
                data: {
                    'usrName': usrName,
                    'usrPwd': usrPwd
                },
                // success方法是的到完整的响应后要执行的函数
                // 强烈提醒注意，该函数有个参数，代表从服务器收到的数据
                success: function(dt) {
                    // dt是收到数据，看它的值是“1”、“2”还是“3”，分别执行不同的程序
                    switch(dt){
                        // 返回“1”，说明账户不存在
                        case '1': 
                        $('#no').hide();
                        $('#user-name').next().show();
                        break;
                        // “2”表示密码错误
                        case '2': 
                        $('#err').hide();
                        $('#user-password').next().show();
                        break;
                        // “3”表示成功登录，执行跳转，跳转到后台页面admin.php
                        case '3': window.location.href = './static/js/admin.php';
                    }
                }
            });
            // $.ajax（）方法结束
        } else {
            // 如果用户没有输入任何字符就要提交，那么就警告用户
            alert('请重新输入！');
        }
    });

});