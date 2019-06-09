<?php 
    class Product {
        // DB Stuff
        private $conn;
        private $table = 'products';

        // Product Properties
        public $id;
        public $title;
        public $description;
        public $image;

        // Constructor
        public function __construct($db){
            $this->conn = $db;
        }

        // Get Products
        public function read() {
            // Create Query
            $query = 'SELECT * FROM ' . $this->table;

            // Prepare Statement
            $stmt = $this->conn->prepare($query);

            // Execute Query
            $stmt->execute();

            return $stmt;
        }

        // Create Products
        public function create() {
            // Create Query
            $query = 'INSERT INTO ' . $this->table . '
                SET
                    title = :title,
                    description = :description,
                    image = :image';

            // Prepare Statement
            $stmt = $this->conn->prepare($query);

            // Clean Data
            $this->title = htmlspecialchars(strip_tags($this->title));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->image = htmlspecialchars(strip_tags($this->image));

            //Bind Data
            $stmt->bindParam(':title', $this->title);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':image', $this->image);

            // Execute Query
            if($stmt->execute()) {
                return true;
            }

            // Print Error When gone wrong
            printf('Error: %s.\n', $stmt->error);

            return false;
        }
    }