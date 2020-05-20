<?php


function salvarLogPontos($latMin,$latMax,$longMin,$longMax,$dadoscount)
{
    $servername = "den1.mysql4.gear.host";
    $username = "bahm";
    $password = "Zu2n80g4_?KS";
    $database = "bahm";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $latlong = $latMin." ".$latMax." ".$longMin." ".$longMax;

    // echo $latlong;

    $sql = "INSERT INTO logs_pontos (latlong,qtdpontos)
    VALUES ('$latlong','$dadoscount')";

    if (mysqli_query($conn, $sql)) {
        $last_id = mysqli_insert_id($conn);
    // echo "New record created successfully. Last inserted ID is: " . $last_id;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    $conn->close();
}


function salvarLogPagina($pagina_id, $pagina)
{
    $servername = "den1.mysql4.gear.host";
    $username = "bahm";
    $password = "Zu2n80g4_?KS";
    $database = "bahm";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }


    // echo $latlong;

    $sql = "INSERT INTO logs_paginas (pagina_id,pagina)
    VALUES ('$pagina_id','$pagina')";

    if (mysqli_query($conn, $sql)) {
        $last_id = mysqli_insert_id($conn);
    // echo "New record created successfully. Last inserted ID is: " . $last_id;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    $conn->close();
}
