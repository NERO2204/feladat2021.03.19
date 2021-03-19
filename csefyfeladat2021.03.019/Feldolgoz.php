<?php

require './MySqlDB.php';
$mySQL=new MySqlDB();
$varosok=array();

    $data=$_GET['mezo'];
    $tablaNeve="varos";
    $where ="nev like '%$data%'";
    
    $eredmeny=$mySQL->lekerdez("varos",$where);
    
    
    $tomb=array();
    if ($result->num_rows>0) 
    {
    while($row=$result->mysql_fetch_assoc($eredmeny))
    {
        array_push($tomb, $row);
    }
    
    echo json_encode($varosok);
    }
    else
    {
        echo "0 results";
    }
