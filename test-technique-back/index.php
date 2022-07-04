<?php

header('Content-Type: application /json');
header('Access-Control-Allow-Origin: *');

try{
    $pdo = new PDO('mysql:host=localhost;port=3306;dbname=test_technique', 'Raphael', 'Zaera/64500');
    $retour["succes"] = true;
    $retour["message"] = "Connexion réussie";
} catch(Exception $e){
    $retour["succes"] = false;
    $retour["message"] = "Connexion echoué";
}


$requete = $pdo->prepare("SELECT * FROM `crew`");
$requete->execute();
$result = $requete->fetchAll();



 echo json_encode($result);



?>