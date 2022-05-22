<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge ">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    
    function password_generator($chars){
        $data = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz'
        $result = substr(str_shuffle($data),0,$chars)
        echo $result;
    }
    
    
    
    ?>
    <button onClick=password_generator(7)>GET THE RANDOM PASSWORD</button>
</body>
</html>