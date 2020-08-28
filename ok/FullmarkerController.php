<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: *');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}


// Cria o cURL
$curl = curl_init();
// Seta algumas opções
require 'IpOptionsClass.php';
$r  = new IpOptions();

// var_dump($_POST['latMin']);
// exit;

// echo $_POST['pc_id'];
// exit;

curl_setopt_array($curl, [
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://api/FullmarkerController.php',
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => [
        'latMin' => (int) $_POST['latMin'],
        'latMax' => (int) $_POST['latMax'],
        'longMin' => (int) $_POST['longMin'],
        'longMax' => (int) $_POST['longMax'],
        'ip' => $r->getIp(),
        'pc_id' => (string) $_POST['pc_id']
    ]
]);
// Envia a requisição e salva a resposta
$response = curl_exec($curl);
// Fecha a requisição e limpa a memória
curl_close($curl);
print_r($response);
