 <?php  
header("Content-type: text/html; charset=UTF-8");  
$name = $_POST['userName'];  
$password=$_POST['userPwd'];  

$adminName = 'admin';
$adminPwd = '123456';


if ($adminName == $name) {
    if ($adminPwd == $password) {
        // 登录成功
        echo '3';
    } else {
        // 密码错误
        echo '2';
    }
    
}else{
    // 账户不存在
    echo '1';
}