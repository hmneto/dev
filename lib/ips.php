<?php 

require 'db.php';

$sqlClientes = "select * from clientes where ip = ?";

$stmt_ip = mysqli_stmt_init($conn);
$resultClientes = null;

if (!mysqli_stmt_prepare($stmt_ip, $sqlClientes)) {
    echo 'erro';
} else {
    mysqli_stmt_bind_param($stmt_ip, "s", $_SERVER["HTTP_X_FORWARDED_FOR"]);
    mysqli_stmt_execute($stmt_ip);
    $resultClientes = mysqli_stmt_get_result($stmt_ip);
}

// $resultClientes = $conn->query($sqlClientes);

$user = array();
// echo "<pre>";
// print_r($resultClientes);
// echo "</pre>";


if ($resultClientes->num_rows > 0) {
    while ($row = $resultClientes->fetch_assoc()){
        // echo "<pre>";
        // print_r($row);
        // echo "</pre>";
        $user["empresa"] = $row["empresa"];
        $user["script"] = $row["script"];
        $user["ip"] = $row["ip"];
    }
} else {
    // echo "Não Cadastrado";
}