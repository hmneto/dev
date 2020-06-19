<?php
require 'Conexao.php';
$f = new Conexao();


print_r($f->getInstancia());
echo '<br>';
print_r($_POST['teste']);