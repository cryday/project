// ========================添加删除商品===============================
$(function() {  
	// 添加商品
     $('.shopcar').click(function(event){
          var proName = $('.tr1').clone(true).removeClass('tr1');
          $('tbody').append(proName);
     })
     
    
      $(document).on('click','.trr .trr1 .shan',function() {
        // this代表被单击的删除按钮（超链接）
        $(this).parent().parent().stop().slideUp(function() {
          // this代表li
          $(this).remove();
        }); 
      });
    });


$(function() {    

      // 全选
      $('#all_xuan').click(function(event) {
        
        $('.check').each(function() {
          if (this.checked) {
            this.checked = false;
          } else {
            this.checked = true;
          }
        });
        
      });

    });
  // ===================加减号数量价钱===========================
      
        // 购买数量加  
            $(function(){
                /*function sum(){                	
                	var stg =parseInt($('.stg').html());
                	var num = $('.search').val();               	
                	return stg*num;                 
                }
                console.log(sum());
               $('.jih').click(function(){
               	   var num = $('.search').val();
               	   $('.search').val(++num);
               	   // $('.zj').html(sum());
               	   $('td').children().find('.zj').html(sum());
               	   // var res=$('.zj').html();
               	   // console.log(res)
               }); 
            });*/
            $('.jih').click(function(){
              var jiajia = $(this).prev().val();
              jiajia++;
               $(this).prev().val(jiajia);
               var price = $(this).parents('td').prev().find('.stg').html();
               // console.log(price);
               var sumprice =$(this).parents('td').next().find('.zj').html(); 
               // console.log(sumprice);
               var sumprices = jiajia*price;
               $(this).parents('td').next().find('.zj').html(sumprices);

               zonghejia();

            });
                // 购买数量减 
           
               /* function sum(){                 
                  var stg =parseInt($('.stg').html());
                  var num = $('.search').val();                 
                  return stg*num;                 
                }
                console.log(sum());*/
               $('.jh').click(function(){
               var jianjian = $(this).next().val();
                    jianjian--;
                 if(jianjian<=1){
                    jianjian=1;
               }
                 // $('.search').val(jianjian);
                 $(this).next().val(jianjian);
                 var price = $(this).parents('td').prev().find('.stg').html();
                 // console.log(price);
                 var sumprice =$(this).parents('td').next().find('.zj').html(); 
                 // console.log(sumprice);
                 var sumprices = jianjian*price;
                 $(this).parents('td').next().find('.zj').html(sumprices);
                   /*var num = $('.search').val();
                     $('.search').val(--num);
                     // $('.zj').html(sum());
                     $('td').children().find('.zj').html(sum());
                     var res=$('.zj').html();
                     console.log(res)*/
                     chazhi()
               }); 
           });
   // 求商品加单价
 function zonghejia(){
  var zongprice = 0;
  $('.zj').each(function(){
    var zongjias = parseInt($(this).html());
      zongprice += zongjias;
      console.log(zongprice);
      $('#zonghe').html(zongprice);
  });
 }
function chazhi(){
  var zongprice = 0;
  $('.zj').each(function(){
    var zongjias = parseInt($(this).html());
      zongprice += zongjias;
      console.log(zongprice);
      $('#zonghe').html(zongprice);
  });
}

