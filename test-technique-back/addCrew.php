<?php

header('Content-Type: application /json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");


try{
    $pdo = new PDO('mysql:host=localhost;port=3306;dbname=test_technique', 'Raphael', 'Zaera/64500');
    $retour["succes"] = true;
    $retour["message"] = "Connexion réussie";
} catch(Exception $e){
    $retour["succes"] = false;
    $retour["message"] = "Connexion echoué";
}

if( !empty($_POST["name_crew"]) ){
    $requete = $pdo->prepare("INSERT INTO `crew` (`name_crew`)
    VALUES (:newCrew);");
    $requete->bindParam(':newCrew', $_POST["name_crew"]);
    $requete->execute();
    echo'all good';

} else {
    $retour["succes"]=false;
    $retour["message"] = 'erreur';
}


?>