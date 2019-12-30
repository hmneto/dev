<?php
$id =  2 ;

error_reporting(0);
        utf8_encode();

        $servername = getenv("hostdbh");
        $username = getenv("userdb");
        $password = getenv("passdb");
        $database = getenv("userdb");

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $database);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        
        $sql = "SELECT *
        from paginas as p
        join concessionarias as c
        on p.concessionaria = c.id_concessionaria
        join pagina_site as ps
        on p.id_pagina = ps.pagina_id
        join sites as s
        on ps.site_id = s.id_site
        left join pagina_contato as pc
        on p.id_pagina = pc.pagina_id_
        left join contatos as ct
        ON pc.contato_id = ct.id_contato
        where id_pagina=".$id;

        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $obj_retorno = array();
            $sites = array();
            $contatos = array();
            $array_repeticoes_contatos = array();
            $array_repeticoes_sites = array();
            while ($row = $result->fetch_assoc()) {
                // echo "<pre>";
                // print_r($row);
                // echo "</pre>";

               
                $obj_retorno["id_pagina"] = $row["id_pagina"];
                $obj_retorno["nome_pagina"] = $row["nome_pagina"];
                $obj_retorno["endereco"] = $row["endereco"];
                $obj_retorno["info"] = $row["info"];
      
                $obj_temp_sites = array();
                $obj_temp_sites["id_site"] = $row["id_site"];
                $obj_temp_sites["link"] = $row["link"];
                $obj_temp_sites["tipo"] = $row["tipo"];
               


                $obj_temp_contatos = array();

                $obj_temp_contatos["nome_contato"] = $row["nome_contato"];
                $obj_temp_contatos["telefone"] = $row["telefone"];
                $obj_temp_contatos["email"] = $row["email"];


                

                if ($row["nome_contato"]) {
                    if (!in_array($row["nome_contato"], $array_repeticoes_contatos)) {
                        array_push($array_repeticoes_contatos, $row["nome_contato"]);
                        array_push($contatos, $obj_temp_contatos);
                    }
                }

                if($row["link"]){
                    if (!in_array($row["link"], $array_repeticoes_sites)) {
                        array_push($array_repeticoes_sites,$row["link"]);
                        array_push($sites, $obj_temp_sites);
                    }
                }
                
                
            }
        } else {
            echo "0 results";
        }

        if ($sites) {
            $obj_retorno["sites"] = $sites;
        }

        if ($contatos) {
            $obj_retorno["contatos"] = $contatos;
        }
        $conn->close();
        function convert_to_utf8_recursively($dat)
        {
            if (is_string($dat)) {
                return mb_convert_encoding($dat, 'UTF-8', 'UTF-8');
            } elseif (is_array($dat)) {
                $ret = [];
                foreach ($dat as $i => $d) {
                    $ret[$i] = convert_to_utf8_recursively($d);
                }
                return $ret;
            } else {
                return $dat;
            }
        }

        $data = convert_to_utf8_recursively($obj_retorno);
        if ($data) {
            print_r(json_encode($data));
        }
 