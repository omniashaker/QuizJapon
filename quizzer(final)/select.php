<?php  
//tomamos los datos del archivo conexion.php  
include("conexion.php");  
$link = Conectarse();  
//se envia la consulta  
$result = mysql_query("SELECT nombre, curso, puntos FROM alumnos  ORDER BY puntos DESC", $link);  
//se despliega el resultado  
echo "<table id='tablaa'>";  
echo "<tr>";  
echo "<th><h1>Nombre</h1></th>";  
echo "<th><h1>curso</h1></th>";  
echo "<th><h1>puntos</h1></th>";  
echo "</tr>";  
while ($row = mysql_fetch_row($result)){   
    echo "<tr>";  
    echo "<td>$row[0]</td>";  
    echo "<td>$row[1]</td>";  
    echo "<td>$row[2]</td>";  
    echo "</tr>";  
}  
echo "</table>";  
?>  
