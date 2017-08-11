/*
        当前此刻时间：now
        活动开始时间：end

        计算二者时间的差值，对应转成小时、分钟、秒
    */

    // 定义活动开始时间
    var end = new Date(2017,3,30,19,47,00);

    // 获取元素
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');


    function daojishi(){
        // 当前此刻时间
        var now = new Date();   

        // 获取两个时间对象差值
        var cha = end.getTime() - now.getTime();

        // 以毫秒为单位的
        console.log(cha);

        // 判断活动是否已经开始了
        if(cha<=0){
            // 停止定时器
            clearInterval(run);
            
            // 设置当前时间
            var xiaoshi = '00';
            var fen = '00';
            var miao = '00';

            // 赋值
            hour.innerHTML = xiaoshi;
            minute.innerHTML = fen;
            second.innerHTML = miao;

            // 弹框提示
            alert('活动已经结束了亲！');
        }else{
            // 计算小时
            var xiaoshi = fillZero(Math.floor(cha/1000/60/60));
            // 计算分钟
            var fen = fillZero(Math.floor(cha/1000/60%60));
            // 计算秒
            var miao = fillZero(Math.floor(cha/1000%60));
            // 赋值
            hour.innerHTML = xiaoshi;
            minute.innerHTML = fen;
            second.innerHTML = miao;
        }   

        
    }

    // 第一次进入页面时调用
    daojishi();
        
    // 判断是否需要调用定时器
    // 当前此刻时间
    var now = new Date();   

    // 获取两个时间对象差值
    var cha = end.getTime() - now.getTime();

    // 表示还有剩余时间时，调用倒计时
    if(cha>0){
        // 使用定时器控制倒计时
        var run = setInterval(function(){
            // 调用倒计时
            daojishi();
        },1000)
    }

    


    // 定义函数补充前导0
    function fillZero(num){
        if(num<10){
            // 手动拼接0
            num = '0'+num;
        }

        // 返回结果
        return num;
    }


