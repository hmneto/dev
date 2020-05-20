<?php
/*
namespace App\Controller;

use App\Controller\AppController;

class PaginaContatoController extends AppController
{
    public function index(int $id)
    {

        // $id = JWT::decode($id, 'bahm');
        $this->autoRender = false;
        require "logs.php";
        salvarLogPagina($id,'pagina_contato');
        $assoc_pagina_site = $this->PaginaContato
            ->find()
            ->where(['pagina_id_'=>$id]);
        echo json_encode($assoc_pagina_site);
    }
}
*/