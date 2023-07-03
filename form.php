<?php


$to = "fedya_maer@mail.ru";

$name = trim($_POST['name']);
$number = trim($_POST['number']);


if(!empty($name) && !empty($number)){
    $fileDate =  file_get_contents("text.txt");
    file_put_contents("text.txt", $fileDate . $name . ', ' . $number . PHP_EOL);
    $error = 'Сохранено';
}




if (mail($to, "Заявка с сайта", "ФИО:".$name.". Номер: ".$number ))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}



?>
