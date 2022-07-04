<?php
header('Content-Type: application /json');
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST, DELETE');

header("Access-Control-Allow-Headers: X-Requested-With");

try{
    $pdo = new PDO('mysql:host=localhost;port=3306;dbname=test_technique', 'Raphael', 'Zaera/64500');
    $retour["succes"] = true;
    $retour["message"] = "Connexion réussie";
} catch(Exception $e){
    $retour["succes"] = false;
    $retour["message"] = "Connexion echoué";
}


$id = $_GET['id'];

$requete = $pdo->prepare("DELETE FROM `crew`
WHERE `id` = :id;");
$requete->bindParam(':id',$id);

if($requete->execute()) {
    return true;
} 

?> 