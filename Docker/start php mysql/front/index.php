<?php
// Cria o cURL
$curl = curl_init();
// Seta algumas opções
curl_setopt_array($curl, [
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://api/index.php',
    CURLOPT_POST => 1,
    CURLOPT_POSTFIELDS => [
        'teste' => "passando o valor"
    ]
]);
// Envia a requisição e salva a resposta
$response = curl_exec($curl);
// Fecha a requisição e limpa a memória
curl_close($curl);
print_r($response);