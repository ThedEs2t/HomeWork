<?php


$to = "fedya_maer@mail.ru";

$name = trim($_POST['name']);
$number = trim($_POST['number']);


$fileDate =  file_get_contents("text.txt");
file_put_contents("text.txt", $fileDate . $name . ', ' . $number . PHP_EOL);


$message = "ФИО: " . $name . "\nНомер: " . $number;

if (mail($to, "Заявка с сайта", $message)) {
    echo "Сообщение успешно отправлено";
} else {
    echo "При отправке сообщения возникли ошибки";
}


?>