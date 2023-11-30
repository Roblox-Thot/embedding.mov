<?php
include '../gen.php';

$videoLink = "https://youtube.com/embed/1AZWtwTTX5";
$imageLink = "https://i.ytimg.com/vi/1AZWtwTTX5/maxresdefault.jpg";

$document = makePage($videoLink, $imageLink);

echo($document);
