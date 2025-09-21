<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validare simplă
    $nume = htmlspecialchars(trim($_POST['nume']));
    $email = htmlspecialchars(trim($_POST['email']));
    $mesaj = htmlspecialchars(trim($_POST['mesaj']));

    // Emailul unde vrei să primești mesajele
    $to = "ionitaionut42@yahoo.com"; // << înlocuiește cu adresa ta

    $subject = "Mesaj de pe site de la $nume";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Ai primit un mesaj nou de pe site:\n\n";
    $body .= "Nume: $nume\n";
    $body .= "Email: $email\n";
    $body .= "Mesaj:\n$mesaj\n";

    // Trimite emailul
    if (mail($to, $subject, $body, $headers)) {
        echo "Mesajul a fost trimis cu succes.";
    } else {
        echo "A apărut o eroare la trimiterea mesajului.";
    }
} else {
    echo "Acces neautorizat.";
}
?>
