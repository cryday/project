var container_center_1 = document.getElementById('container_center_1');

    // 左右箭头
    var left = document.getElementById('left');
    var right = document.getElementById('right');

    // 获取所有的li
    var lis = container_center_1.children[0].children;
    // console.log(lis);

    // 获取所有的圆点li
    var lists = document.getElementById('circlelist').children[0].children;
    // console.log(lists);

    // 定义索引index，标志要显示的图片的索引
    var index = 0;

    // 定义变量run，就是定时器是否运行的标志
    var run;

    // 定义轮播图自动轮显函数 autoRun()
    function autoRun(){
        // 定时器叠加问题：多个定时器同时触发了
        // 定时器一次只启动一个
        if(run){
            // 终止程序
            return;
        }

        // 设置定时器
        run = setInterval(function(){
            // 轮播图核心理论：当前图片隐藏，下一张显示
            lis[index].removeAttribute('class');
            // 圆点切换
            lists[index].removeAttribute('class');
            // 索引自增++
            index++;

            // 临界值判断
            if(index==lis.length){
                // 重置为0
                index = 0;
            }

            // 下一张显示
            lis[index].setAttribute('class','active');
            lists[index].setAttribute('class','listactive');
        },2000);
    }

    // 当页面第一次进入时自动调用轮播图函数
    autoRun();  

    // 设置li的鼠标移入/移出事件
    for(var i=0;i<lis.length;i++){
        // 移入事件
        // lis[i].onmouseover = function(){
        //  // 停止定时器
        //  clearInterval(run);
        // }
        // 移出事件
        // lis[i].onmouseout = function(){
        //  // 重新调用定时器
        //  autoRun();
        // }
    }

    // 当鼠标移入show容器时，停止定时器
    show.onmouseover = function(){
        // 停止
        clearInterval(run);
        // console.log(run);
        // 将标志run重新赋值为空
        run = undefined;

        // 左右箭头显示
        left.style.display = 'block';
        right.style.display = 'block';
    }
    // 鼠标离开show容器时
    show.onmouseout = function(){
        // 调用轮播图函数
        autoRun();

        // 隐藏左右箭头
        left.style.display = 'none';
        right.style.display = 'none';
    }

    // 左箭头的鼠标移入事件
    left.onmouseover = function(){
        // console.log(1111);
        this.style.background = 'rgba(0,0,0,0.6)';
    }
    left.onmouseout = function(){
        this.style.background = 'rgba(0,0,0,0.1)';
    }

    // 右箭头
    right.onmouseover = function(){
        // console.log(1111);
        this.style.background = 'rgba(0,0,0,0.6)';
    }
    right.onmouseout = function(){
        this.style.background = 'rgba(0,0,0,0.1)';
    }

    // 左右箭头的单击事件
    left.onclick = function(){
        // 对于轮播图自身

        // 当前元素隐藏
        lis[index].removeAttribute('class');
        lists[index].removeAttribute('class');
        // 当前的索引-1
        index--;

        // 最小值临界判定
        if(index<0){
            // 赋值为最大值 = 长度 - 1
            index = lis.length - 1;
        }

        // 上一张显示
        lis[index].setAttribute('class','active');
        lists[index].setAttribute('class','listactive');
    }

    // 右侧箭头
    right.onclick = function(){
        // 当前隐藏 
        lis[index].removeAttribute('class');
        lists[index].removeAttribute('class');
        // 索引++
        index++;

        // 最大值
        if(index==lis.length){
            // 重新赋值为0
            index = 0;
        }

        // 下一张显示
        lis[index].setAttribute('class','active');
        lists[index].setAttribute('class','listactive');
    }

    // 圆点li的移入和移出事件
    for(var i=0;i<lists.length;i++){
        // 手动设置元素的标记
        lists[i].setAttribute('data-index',i);          

        // 移入事件
        lists[i].onmouseover = function(){
            // 将之前显示的元素移除class
            lis[index].removeAttribute('class');
            lists[index].removeAttribute('class');

            // 知道我是第几张
            // 获取该元素身上的data-index的值
            // console.log(this.getAttribute('data-index'));
            index = this.getAttribute('data-index');

            // 当前图片、圆点显示
            lis[index].setAttribute('class','active');
            lists[index].setAttribute('class','listactive');
        }
    }
