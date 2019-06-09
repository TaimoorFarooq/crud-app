<?php 
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/product.php';

    // DB Inititalize
    $database = new Database();
    $db = $database->connect();

    // Inititalize Product Object
    $product = new Product($db);

    // Get raw posted content
    $data = json_decode(file_get_contents('php://input'));

    $product->title = $data->title;
    $product->description = $data->description;
    $product->image = $data->image;

    // Create Product
    if($product->create()) {
        echo json_encode(
            array('Message' => 'Post Created')
        );
    } else {
        echo json_encode(
            array('Message' => 'Post Not Created')
        );
    }