<?php
namespace App\Controller;

use App\Controller\AppController;

class IconesController extends AppController
{
    public function todos()
    {
        // session_start();
        
        // if(!isset($_SESSION['empresa'])){
        //     // exit;
        // }
        require 'ip.php';

        $this->autoRender = false;
        error_reporting(0);

        // if(empty($user))
        //     return null;
        $teste = new MyClass();
        // require "logs.php";
        // salvarLogPagina(0000,'icones');
        $teste->get_icones($this);

        // session_destroy();
    }
}
