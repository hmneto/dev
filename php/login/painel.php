<?php
    $host = "db4free.net";
    $user = "hmneto1991";
    $pass = "tenso123";
    $banco = "bancoteste";
    
    $conexao = mysql_connect($host, $user, $pass) or die (mysql_error());
    mysql_select_db($banco) or die (mysql_error());
    
    




?>


<?php
    session_start();
    if(!isset($_SESSION["email"]) || !isset($_SESSION["senha"])){
        header("Location: login.php");
        exit;
    }else{
        echo "você está logado!";
    }
    




?>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title></title>
        
    </head>
    <body>
    <a href="logout.php">sair</a>
        
    </body>
</html>