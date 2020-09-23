<?php
     header('Content-Type: application/json');
     include 'db.php';
           
        /* verifico se presente author */
      if (isset($_GET['author']) && $_GET['author'] != 'All') {
          $filterDb = [];
          foreach ($database as $value) {
              if ($value['author'] == $_GET['author']) {
                  $filterDb[] = $value;
              }
          }
          $database = $filterDb;
      }
             
      echo json_encode($database);
