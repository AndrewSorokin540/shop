<?php

/* https://api.telegram.org/bot737425646:AAERIGIWq4XKwewLr4McLpo4NA9haP32iiQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$street = $_POST['street'];
$building = $_POST['building'];
$room = $_POST['room'];
$phone = $_POST['phone'];
$token = "737425646:AAERIGIWq4XKwewLr4McLpo4NA9haP32iiQ";
$chat_id = "-467128086";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>