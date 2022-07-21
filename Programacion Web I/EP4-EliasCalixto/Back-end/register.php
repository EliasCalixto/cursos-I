<?php
    include('conn.php');
    header('Access-Control-Allow-Origin: http://127.0.0.1:5500');

    if(isset($_POST['task'])){
        echo 'success task:'.$_POST['task'];
    }else{
        echo 'failure task';
    }
?>