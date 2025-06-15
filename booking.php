<?php
$subject = 'Cita Web';
$to = 'mutuavisio@gmail.com';

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$msg = $_POST['message'] ?? '';
$service = $_POST['service'] ?? '';
$date = $_POST['date'] ?? '';
$time = $_POST['time'] ?? '';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

$message = "Nombre: $name\n";
$message .= "Email: $email\n";
$message .= "Teléfono: $phone\n";
$message .= "Servicio: $service\n";
$message .= "Fecha y hora: $date $time\n";
$message .= "Mensaje: $msg\n";

if (mail($to, $subject, $message, $headers)) {
    echo 'sent';
} else {
    echo 'failed';
}
?>