<?php
namespace App\Controller;

class MyClass
{
    public function get_pontos($context, float $latMin, float $latMax, float $longMin, float $longMax)
    {

        error_reporting(0);
        $context->autoRender = false;

            $pontos = $context->Pontos->find('all')
                ->where(['latitude <' => $latMin]) //-17
                ->where(['latitude >' => $latMax]) // -18

                ->where(['longitude <' => $longMin]) // -49
                ->where(['longitude >' => $longMax]); // -50



            $t = array();
            foreach ($pontos as $value) {
                $aaa = json_decode($value);
                // $aaa->pagina = JWT::encode($value->pagina, 'bahm');
                unset($aaa->id_ponto);
                array_push($t,$aaa);
                // print_r($aaa);
            }

            return $t;
        

        

        // PontosController

        // public function get(float $latMin, float $latMax, float $longMin, float $longMax)
        // {
        //     $teste = new MyClass();
        //     $teste->get_pontos($this,$latMin, $latMax, $longMin, $longMax);
        // }
    }

    public function get_icones($context)
    {
        error_reporting(0);
        $context->autoRender = false;
        echo json_encode($context->Icones->find('all'));

        // IconesController

        // public function todos(){
        //     $teste = new MyClass();
        //     $teste->get_icones($this);
        // }
    }


    public function strapiToMysql($context)
    {
        $context->autoRender = false;
        $g = json_decode($context->request->getBody()->getContents());
        $wikis = $context->Wikis->newEntity();
        $wikis->nome = $g->nome;
        $wikis->link = $g->link;
        $context->Wikis->save($wikis);
        print_r(json_encode($wikis));
    }


    // public function index()
    // {
    //     $myClass = new MyClass();
    //     $myClass->strapiToMysql($this);
    // }
}










// public function get_um_icone($context, int $id)
// {
//     error_reporting(0);
//     $context->autoRender = false;
//     echo $context->Icones->get($id);

//     // IconesController

//     // public function um(int $id)
//     // {
//     //     $teste = new MyClass();
//     //     $teste->get_um_icone($this, $id);
//     // }
// }







// public function strapi_icone($context)
// {
//     $context->autoRender = false;
//     if ($context->request->is(['post', 'ajax'])) {
//         $dados = json_decode($context->request->getBody()->getContents());

//         print_r($dados);
//         $icone = $context->Icones->newEntity();
//         $icone->id_icone = $dados->id;
//         $icone->nome = $dados->nome;
//         $icone->link = $dados->link;

//         if ($context->Icones->save($icone)) {
//             echo 'salvo';
//         }
//     }

//     // IconesController
    
//     //     function post()
//     // {
//     //     $teste = new MyClass();
//     //     $teste->strapi_icone($this);
//     // }
// }

// public function strapi_ponto($context)
// {
//     $context->autoRender = false;
//     if ($context->request->is(['post', 'ajax'])) {
//         $dados = json_decode($context->request->getBody()->getContents());
//         print_r($dados);
//         $ponto = $context->Pontos->newEntity();
//         $ponto->id_ponto = $dados->id;
//         $ponto->nome = $dados->nome;
//         $ponto->latitude = $dados->latitude;
//         $ponto->longitude = $dados->longitude;
//         $ponto->pagina = $dados->pagina;
//         $ponto->icone_id = $dados->pontoIcone;
//         $ponto->criado = $dados->createdAt;
//         $ponto->atualizado = $dados->updatedAt;
//         $ponto->criado_por = $dados->createdBy;
//         $ponto->atualizado_por = $dados->updatedBy;
//         if ($context->Pontos->save($ponto)) {
//             echo 'salvo';
//         }
//     }

//     // PontosController
    
//     //     public function post()
//     // {
//     //     $teste = new MyClass();
//     //     $teste->strapi_ponto($this);
//     // }
// }
