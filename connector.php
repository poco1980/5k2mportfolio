<?php
require_once("codebase/connector/grid_connector.php");

$conn=mysql_connect("localhost","Noah","larissa7");
mysql_select_db("5k2m");

$grid = new GridConnector($conn,"MySQL");

$grid->render_table("Portfolio_1","id");
?>