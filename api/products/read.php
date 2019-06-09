<?php 
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/product.php';

    // DB Inititalize
    $database = new Database();
    $db = $database->connect();

    // Inititalize Product Object
    $product = new Product($db);

    // Product Query
    $result = $product->read();

    //Get row count
    $num = $result->rowCount();

    if($num > 0) {
        // Post Array
        $product_arr = array();
        $product_arr['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $product_item = array(
                'id' => $id,
                'title' => $title,
                'description' => $description,
                'image' => $image
            );

            // Push to data
            array_push($product_arr['data'], $product_item);
        }

        // Turn to JSON Format
        echo json_encode($product_arr); 
    } else {
        // No Products 
        echo json_encode(
            array('message' => 'No Product Found')
        );
    }