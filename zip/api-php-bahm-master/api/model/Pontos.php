<?php
include '../conexao/Conexao.php';


class Pontos
{
    private $instancia;
    private $retorno = array();
    public function __construct()
    {
        $conexao = new Conexao;
        $this->instancia = $conexao->getInstancia();
    }

    public function buildObj($result)
    {
        while($row = $result->fetch_assoc())
        {
            array_push($this->retorno, $row);
        }
        return $this->serializeJson($this->retorno);
    }

    public function getPontos(float $latMin, float $latMax, float $longMin, float $longMax)
    {
        $sql = "SELECT * FROM pontos JOIN icones ON icone_id = id_icone where `latitude` < '".$latMin."' and `latitude` > '".$latMax."' and `longitude` < '".$longMin."' and longitude > '".$longMax."'";

        $resultado_pontos = $this->instancia->query($sql);

        return $this->buildObj($resultado_pontos);
    }

    public function serializeJson($obj)
    {
        return json_encode($obj);
    }
}


// $p = new Pontos;
// $latMin = $_GET['latMin'];
// $latMax = $_GET['latMax'];
// $longMin = $_GET['longMin'];
// $longMax = $_GET['longMax'];
// $dados = $p->getPontos($latMin,$latMax,$longMin,$longMax);
// echo '<pre>';
// print_r($dados);
// echo '</pre>';