<?php

// verification présence données
if (isset($_POST['nom']) AND isset($_POST['prenom'])  AND isset($_POST['mail']) AND isset($_POST['message'])){
        $to = 'dcl.sylvieg@18pixel.fr';
        $object = 'réponse au formulaire de contact CV online';
            
        $message = $genre.' '.$_POST['nom']. ' '.$_POST['prenom']. ' vous a envoyé ce message : <br>';
        $message.= $_POST['message'];
        
        $headers = 'From:'. " ".$_POST['mail']."\r\n";
        $headers .= 'Repply-To : sylvieg18@orange.fr'."\r\n";
        $headers .= 'MIME-Version: 1.0' ."\r\n";
        $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
        mail($to, $object, $message, $headers);

        // verification envoi
        echo 'Votre message a bien été envoyé';

    }

    

    header ('location: index.php');

    ?>