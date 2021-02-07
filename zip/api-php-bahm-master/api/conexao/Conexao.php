<?php
class Conexao
{
    private $instancia;
    private $servername;
    private $username;
    private $password;
    private $database;

    function __construct()
    {
        $this->instancia = null;
        $this->servername = getenv('dbserver');
        $this->username = getenv('dbuser');
        $this->password =  getenv("dbpass");
        $this->database = getenv('dbdatabase');
        if(!isset($this->instancia))
        {
            try
            {
                $this->instancia = new mysqli($this->servername,$this->username,$this->password,$this->database);
            } catch(Exception $e)
            {
                $this->instancia = false;
                echo $e->getMessage();
            }
        }
    }

    public function getInstancia()
    {
        return $this->instancia;
    }
} 

// $t = new Conexao;
// echo "<pre>";
// print_r($t->getInstancia());
// echo "</pre>";