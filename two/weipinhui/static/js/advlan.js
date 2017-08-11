 var adv= document.getElementById('adv');
 var stop=document.getElementById('stop');

    
    var stepX = 1;
    var stepY = 1;

    var run;
    function autoRun(){
        if(run){
            return;
        }
    run=setInterval(function(){
       
        var cW = document.documentElement.clientWidth;
        var cH = document.documentElement.clientHeight;

        var newLeft = adv.offsetLeft + stepX;        
        var newTop = adv.offsetTop + stepY;      

        if(newLeft >= (cW-adv.offsetWidth)){           
            newLeft = cW - adv.offsetWidth;            
            stepX *= -1;          
            
        }
        
        if(newLeft<=0){
            newLeft = 0;           
            stepX *= -1;          
           
        }
        
        if(newTop >= (cH-adv.offsetHeight)){
            newTop = cH - adv.offsetHeight;           
            stepY *= -1;         
           
        }        
        if(newTop<=0){
            newTop = 0;
            stepY*=-1;           
           
        }       
        adv.style.left = newLeft+'px';
        adv.style.top = newTop+'px';
    },10);   
   }
   autoRun(); 

     adv.onmouseover = function(){
        clearInterval(run);
        run = undefined;
    }
    adv.onmouseout = function(){
       autoRun();
    }
    stop.onclick = function(){
        adv.style.display='none';
        setInterval(function(){
        adv.style.display='block'; 
          autoRun();
        },10000);   
         
    }