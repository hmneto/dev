<?php

class Pagina extends Dbh
{

    private $id_pagina;
    private $nome_pagina;
    private $endereco;
    private $info;
    private $sites = array();
    private $contatos = array();
    private $instancia;
    private $array_repeticoes_sites = array();
    private $array_repeticoes_contatos = array();


    public function getPaginaSql($id)
    {
        $sql = "SELECT * from paginas as p join concessionarias as c on p.concessionaria = c.id_concessionaria join pagina_site as ps on p.id_pagina = ps.pagina_id join sites as s on ps.site_id = s.id_site left join pagina_contato as pc on p.id_pagina = pc.pagina_id_ left join contatos as ct ON pc.contato_id = ct.id_contato where id_pagina = ?";

        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id]);
        return $stmt;
        // while($row = $stmt->fetch()){
        //     echo "<br>";
        //     print_r($row);
        //     echo "</br>";
        // }
    }

    private function setIdPagina($id_pagina)
    {
        $this->id_pagina = $id_pagina;
    }

    private function setNomePagina($nome_pagina)
    {
        $this->nome_pagina = $nome_pagina;
    }

    private function setEndereco($endereco)
    {
        $this->endereco = $endereco;
    }

    private function setInfo($info)
    {
        $this->info = $info;
    }

    private function addSite($row)
    {
        $obj_temp_sites = array();
        $obj_temp_sites["id_site"] = $row["id_site"];
        $obj_temp_sites["link"] = $row["link"];
        $obj_temp_sites["tipo"] = $row["tipo"];

        if ($row["id_site"]) {
            if (!in_array($row["id_site"], $this->array_repeticoes_sites)) {
                array_push($this->array_repeticoes_sites, $row["id_site"]);
                array_push($this->sites, $obj_temp_sites);
            }
        }
    }

    private function addContato($row)
    {
        $obj_temp_contatos = array();
        $obj_temp_contatos["id_contato"] = $row["id_contato"];
        $obj_temp_contatos["nome_contato"] = $row["nome_contato"];
        $obj_temp_contatos["telefone"] = $row["telefone"];
        $obj_temp_contatos["email"] = $row["email"];

        if ($row["id_contato"]) {
            if (!in_array($row["id_contato"], $this->array_repeticoes_contatos)) {
                array_push($this->array_repeticoes_contatos, $row["id_contato"]);
                array_push($this->contatos, $obj_temp_contatos);
            }
        }
    }

    private function builtOBJ($result)
    {
        // if ($result->num_rows > 0)
        // {
        while ($row = $result->fetch()) {
            $this->setIdPagina($row["id_pagina"]);
            $this->setNomePagina($row["nome_pagina"]);
            $this->setEndereco($row["endereco"]);
            $this->setInfo($row["info"]);
            $this->addSite($row);
            $this->addContato($row);
        }
        // } else 
        // {
        //     $this->error = "not found";
        // }
        // var_dump($this);
        return $this;
    }


    private function getPaginaSqlJson($dados)
    {
        $retorno = array();
        $retorno["id_pagina"] = $dados->id_pagina;

        $nome_trocado = str_replace("\"", "?|?", $dados->nome_pagina);
        $retorno["nome_pagina"] = $nome_trocado;

        $endereco_trocado = str_replace("\"", "?|?", $dados->endereco);
        $retorno["endereco"] = $endereco_trocado;

        $retorno["info"] = $dados->info;
        $retorno["sites"] = $dados->sites;
        $retorno["contatos"] = $dados->contatos;

        return $retorno;
    }

    // private function close()
    // {
    //     $this->instancia->close();
    // }

    // public function convert_to_utf8_recursively($dat)
    // {
    //     if (is_string($dat)) {
    //         return mb_convert_encoding($dat, 'UTF-8', 'UTF-8');
    //     } elseif (is_array($dat)) {
    //         $ret = [];
    //         foreach ($dat as $i => $d) {
    //             $ret[$i] = convert_to_utf8_recursively($d);
    //         }
    //         return $ret;
    //     } else {
    //         return $dat;
    //     }
    // }



    public function exec($id)
    {
        $result = $this->getPaginaSql($id);
        $page = $this->builtOBJ($result);
        $arraay = $this->getPaginaSqlJson($page);
        return json_encode($arraay);
    }
}
