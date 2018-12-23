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


<!-- QR code du cv en ligne
<a href='http://www.unitag.io/qrcode'><img src='http://www.unitag.io/qreator/generate?crs=xnjFkEn%252FP85fCPDXJ%252FXXKg5g6yQi7H4qzUlRVUntU035Re8CX7iHj071HbqF%252BCfYW0fkByoDtlWAYEP%252FkF2dipjP8Ux69VtYkusoonlKTAkgSRnmfwEzhpz3ulb%252BfgcH8xxrpOTbfLtqZS7YE5Pf9g%253D%253D&crd=fhOysE0g3Bah%252BuqXA7NPQ5wC14dlbAdKB5a1P2KEU3MgSf8l8VdBkAsztzTfgHq%252BSIhxrEUB4u0S158jJ42fU43ji0j%252Fj8WjzFGsVcE7kOiPpSjWh4XManZbTU6a%252BCeD' alt='QR Code'/></a> -->