<?php
$nombre =$_POST['nombre'];
$curso =$_POST['curso'];
$puntos = $_POST['puntos'];

$con = mysql_connect('localhost', 'root', 'root114');
mysql_select_db("japon", $con);

$insert = "INSERT INTO alumnos (nombre, curso,puntos) VALUES ('$nombre', '$curso','$puntos')";
mysql_query($insert);
?>


