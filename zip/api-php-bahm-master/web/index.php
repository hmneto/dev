<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <?php
        // $id = $_GET['t'];
        // echo file_get_contents('http://api/model/Pagina.php?v='.$id);
        
    ?>
  

    <script>
        <?php
            $id = $_GET['t'];
            $json = file_get_contents('http://api/model/Pagina.php?v='.$id);
            echo "let dados = `{$json}`;";
            // echo "let dados = JSON.parse(`$json`);";
        ?>
        console.log(dados)
    </script>
</body>
</html>
