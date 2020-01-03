<?php
    $host = "db4free.net";
    $user = "hmneto1991";
    $pass = "tenso123";
    $banco = "bancoteste";
    
    $conexao = mysql_connect($host, $user, $pass) or die (mysql_error());
    mysql_select_db($banco) or die (mysql_error());
    
    




?>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Autenticando Usuario</title>
        <script type="text/javascript" charset="utf-8">
            function loginsuccessfully(){
                setTimeout("window.location='painel.php'",5000);
                
            }
            
            function loginfailed(){
                setTimeout("window.location='login.php'",5000);
            }
        </script>
        
    </head>
    <body>
        
 

<?php
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    
    $sql = mysql_query("SELECT * FROM usuario WHERE email = '$email' and senha = '$senha'") or die (mysql_error());
    
    $row = mysql_num_rows($sql);
    
    if($row > 0){
        session_start();
        $_SESSION['email']=$_POST['email'];
        $_SESSION['senha']=$_POST['senha'];
        echo "voce foi autenticado com sucesso! Aguarde um instante.";
        echo "<script>loginsuccessfully()</script>";
    }
    else{
        echo "Nome de usuario ou senha invalidos";
        echo "<script>loginfailed()</script>";
        
    }
    
    

?>

   </body>
</html>