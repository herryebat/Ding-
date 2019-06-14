<?php
	header("Content-type: application/json; charset=ISO-8859-1");
	include_once "koneksi.php";
	$sql = "select * from mahasiswa";
	$query = mysqli_query($koneksi, $sql);
	$arrMhs = array();
	while ($row = mysqli_fetch_array($query)){
		$arrMhs[] = $row;
	}
	echo json_encode($arrMhs );
	mysqli_close($koneksi);
 ?>
