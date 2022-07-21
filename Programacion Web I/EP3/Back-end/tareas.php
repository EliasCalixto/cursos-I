<?php
    include('conn.php');

    header('Access-Control-Allow-Origin: http://127.0.0.1:5500');

    $query = mysqli_query($conn,'SELECT * FROM task');

    $response = new stdClass();

    while($row = mysqli_fetch_array($query,MYSQLI_ASSOC)){
        $task = new stdClass();
        foreach($row as $key=>$value){
            $task->{$key}=$value;
        }
        $tasks[]=$task;
    }
    mysqli_close($conn);

    $response->tasks=$tasks;
    echo json_encode($response);
?>