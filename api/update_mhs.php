<?php
	include_once "koneksi.php";
	$data = json_decode(file_get_contents('php://input'), true);
	$nim=$data['nim'];
	$nama_mhs=$data['nama_mhs'];
	$sql = "update mahasiswa set nama_mhs='$nama_mhs' where nim='$nim'";


	$info=array();
	$info['sql']=$sql;
	if (mysqli_query($koneksi, $sql)) {
		$info['success'] =1;
		$info['detail'] = 'success';
	} else {
		$info['success'] =0;
		$info['detail'] =mysqli_error($koneksi);
	}
	mysqli_close($koneksi);
	echo json_encode($info);
?>
