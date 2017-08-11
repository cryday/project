
	// 获取元素
	var pro = document.getElementById('pro');
	var city = document.getElementById('city');
	var county = document.getElementById('county');

	// 将省份的信息遍历出来
	var pro_str = '<option value="">请选择</option>';

	// 遍历address[0]对应的省份，拼接字符串
	for(var i in address[0]){
		pro_str += '<option value="0,'+i+'">'+address[0][i]+'</option>';
	}

	// 给pro进行赋值操作
	pro.innerHTML = pro_str;

	// 设置pro省份的onchange事件
	pro.onchange = function(){
		// 获取当前省份下对应的市
		// 知道当前是哪个省
		// console.log(this.value);

		// 对于县都要隐藏
		county.style.display = 'none';

		// 如果当前用户选择的是请选择
		if(!this.value){
			// 隐藏城市
			city.style.display = 'none';

			// 直接终止程序
			return;
		}

		// 让市显示
		city.style.display = 'inline-block';


		// 定义城市的初始化字符串
		var city_str = '<option value="">请选择</option>';

		// 遍历对应的市
		for(var i in address[this.value]){
			city_str += '<option value="'+this.value+','+i+'">'+address[this.value][i]+'</option>';
		}

		// console.log(city_str);
		// 给城市赋值
		city.innerHTML = city_str;
	}

	// 城市city的onchange事件
	city.onchange = function(){
		// 知道当前是哪个市
		// console.log(this.value);

		// 判断用户单击的是否是请选择
		if(!this.value){
			// 将县隐藏
			county.style.display = 'none';

			// 终止执行程序
			return;
		}


		// 设置县显示
		county.style.display = 'inline-block';


		// 定义县的初始化字符串
		var county_str = '<option value="">请选择</option>';

		// 遍历县
		for(var i in address[this.value]){
			county_str+='<option value="">'+address[this.value][i]+'</option>';
		}
		// 赋值
		county.innerHTML = county_str;
	}
