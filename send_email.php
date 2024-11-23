<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse email où vous voulez recevoir les messages
    $to = "kokoukourakou856@gmail.com"; 
    $subject = "Nouveau message du formulaire de contact";
    
    // Contenu de l'email
    $body = "Nom: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";
    
    // Entêtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Une erreur est survenue lors de l'envoi du message.";
    }
}
?>
