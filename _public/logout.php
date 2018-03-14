<?php
session_start();
$_SESSION['facebook_access_token'] ="";
setcookie('user', '', time() - 3600, "/");
echo $_COOKIE['user'];
setcookie('firstname', '', time() - 3600, "/");
echo $_COOKIE['firstname'];
setcookie('lastname', '', time() - 3600, "/");
echo $_COOKIE['lastname'];
setcookie('profilePic', '', time() - 3600, "/");
echo $_COOKIE['profilePic'];
setcookie('mail', '', time() -3600, "/");
echo $_COOKIE['mail'];
session_destroy();
header('Location:http://tipit.com/public');
?>
