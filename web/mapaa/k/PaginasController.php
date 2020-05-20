<?php

namespace App\Controller;

use App\Controller\AppController;

class PaginasController extends AppController
{
    public function getpagina(int $id)
    {
        $this->autoRender = false;
        // $id = JWT::decode($id, 'bahm');
       
        // salvarLogPagina($id,'pagina');


        // require "logs.php";
        // $servername = "den1.mysql4.gear.host";
        // $username = "bahm";
        // $password = "Zu2n80g4_?KS";
        // $database = "bahm";

        // // Create connection
        // $conn = mysqli_connect($servername, $username, $password, $database);
        // // Check connection
        // if (!$conn) {
        //     die("Connection failed: " . mysqli_connect_error());
        // }


        // // echo $latlong;

        // $sql = " select *
        // from paginas as p
        // inner join concessionarias as c
        // on p.concessionaria = c.id_con
        // inner join pagina_site as ps
        // on p.id = ps.pagina
        // inner join sites as s
        // on ps.site = s.id_site
        // inner join pagina_contato as pc
        // on p.id = pc.contato_pagina
        // inner join contatos as ct
        // on ct.id_contato = pc.contato_id
        // where id = 2";

        // if (mysqli_query($conn, $sql)) {
        //     // $last_id = mysqli_insert_id($conn);
        // // echo "New record created successfully. Last inserted ID is: " . $last_id;
        // } else {
        //     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        // }

        // $conn->close();

    
        error_reporting(0); 
        echo json_encode($this->Paginas->get($id));
    }
}
