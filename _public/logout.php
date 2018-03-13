<?php
session_start();
$_SESSION['facebook_access_token'] ="";
session_destroy();
header('Location:http://tipit.com/public');
?>
