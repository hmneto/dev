<?php

class Dbh {
    private $host;
    private $user;
    private $pass;
    private $dbName;

    public function __construct()
    {
        $this->host = getenv("server");
        $this->user = getenv("user");
        $this->pass = getenv("pass");
        $this->dbName = getenv("database");
    }

    protected function connect()
    {
        $dsn = 'mysql:host='.$this->host.';dbname='.$this->dbName;
        $pdo = new PDO($dsn,$this->user,$this->pass);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
        return $pdo;
    }

}
