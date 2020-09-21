<?php

     header('Content-Type: application/json');
     
     include 'db.php';
        
       
          /*   if (!isset($_GET['author'])) {
                echo json_encode($database);
            } else {
                $filterDb = [];
                foreach ($database as $value) {
                    if ($value['author'] == $_GET['author']) {
                        $filterDb[] = $value;
                    }
                }
                echo json_encode($filterDb);
            } */

            
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
