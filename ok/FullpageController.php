<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: *');
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Cria o cURL
$curl = curl_init();

require 'IpOptionsClass.php';

$r  = new IpOptions();


// Seta algumas opções
curl_setopt_array($curl, [
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://api/FullpageController.php',
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => [
        'id' => $_POST['id'],
        'ip'=>$r->getIp(),
        'token'=>$_POST['token']
    ]
]);
// Envia a requisição e salva a resposta
$response = curl_exec($curl);
// Fecha a requisição e limpa a memória
curl_close($curl);

print_r($response);