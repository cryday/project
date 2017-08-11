// 获取元素
	var beijingtu = document.getElementById('beijingtu'); 
	var fangdajing1lefts = document.getElementById('fangdajing1lefts');
	var beijingtuxiao = document.getElementById('beijingtuxiao');

	fangdajing1lefts.onmouseover = function(e){

		beijingtu.style.width = '1100px';
		beijingtu.style.height = '1390px';
		beijingtuxiao.style.display = 'none';
		beijingtu.style.display = 'block';
	}

	fangdajing1lefts.onmousemove = function(e){
		//计算背景图片的偏移值
		
		
		//console.log(e.pageX);
		var newLeft = (e.pageX-fangdajing1lefts.offsetLeft)*beijingtu.offsetWidth/fangdajing1lefts.offsetWidth;
		var newTop = (e.pageY-fangdajing1lefts.offsetTop)*beijingtu.offsetHeight/fangdajing1lefts.offsetHeight;
		//console.log(newLeft);
		//console.log(newTop);
		if(newLeft>=680){
				newLeft = 680;
				//console.log(newLeft);
		}
		if(newTop>=858){
			newTop = 858;
		}
		beijingtu.style.left = -newLeft+'px';
		beijingtu.style.top = -newTop+'px';
		console.log(beijingtu.offsetLeft);
		//console.log(beijingtu.offsetLeft);
	}
	fangdajing1lefts.onmouseout = function(){
		//beijingtu.style.width = '420px';
		//beijingtu.style.height = '532px';
		beijingtu.style.display = 'none';
		beijingtuxiao.style.display = 'block';
	}


	// 获取所有的图片li列表
	var lis = fangdajing1leftz.children[0].children;
	// console.log(lis);
	for(var i=0;i<lis.length;i++){
		lis[i].onclick = function(){
			// 获取当前图片对应的地址
			// console.log(this.children[0].src);

			// 将图片的地址赋值给左侧的show
			beijingtuxiao.src = this.children[0].src;
			// 右侧大图 bigImg
			beijingtu.src = this.children[0].src;
		}
	}


		var jian = document.getElementById('jian');
		var zengjia = document.getElementById('zengjia');
	// 购买数量减  
			$(function(){
					$("#jian").click(function(){
							var n = $(".qty").val();
						function subtract(n){
							n = parseInt(n);
							if (n>0){
								n=n-1;
								$(".qty").val(n);
							}
						}
							subtract(n);
					})
			});
// 购买数量加  
			$(function(){
				$("#zengjia").click(function(){
						var n = $(".qty").val();
		
		
					function plus(n){
					n = parseInt(n);
					n=n+1;
						$(".qty").val(n);
						
					}
					plus(n);
				})
			});

















			