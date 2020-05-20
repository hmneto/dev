<?php
namespace App\Controller;

use App\Controller\AppController;

class PontosController extends AppController
{
    public function index(float $latMin, float $latMax, float $longMin, float $longMax)
    {
        require 'ip.php';

        $this->autoRender = false;
        error_reporting(0);

        // if(empty($user))
        //     return null;
        $teste = new MyClass();
        $dados = $teste->get_pontos($this, $latMin, $latMax, $longMin, $longMax);
        // require "logs.php";
        // salvarLogPontos($latMin, $latMax, $longMin, $longMax,count($dados));
        echo json_encode($dados);

    }
}