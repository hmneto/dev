<?php
/*
namespace App\Controller;

use App\Controller\AppController;

class PaginaSiteController extends AppController
{
    public function index(int $id)
    {
        // $id = JWT::decode($id, 'bahm');
        $this->autoRender = false;
        require "logs.php";
        salvarLogPagina($id,'pagina_site');
        $assoc_pagina_site = $this->PaginaSite
            ->find()
            ->where(['pagina_id'=>$id]);
        echo json_encode($assoc_pagina_site);
    }
}
*/