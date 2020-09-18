<?php

include __DIR__ .'/dischi-db.php';
/* var_dump($database); */

foreach ($database as $value) {
}

/*  'title'
   'author'
   'year'
   'poster' */


  
?>



<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
	<link rel="stylesheet" href="dist/app.css">
	<title>Db Dischi PHP</title>
</head>

<body>

	<div class="container">

		<header>
			<nav>
				<i class="fab fa-spotify logo"></i>
				<!-- <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/icon-spotify-pace-house-2.png"
					alt="icon spotify pace house" />
 -->
			</nav>

		</header>

		<main>


		<?php foreach ($database as $value) { ?>
			
			<div class="disc">

				<img src="<?php echo $value['poster'] ?>" alt="" srcset="">

				<h3><?php echo $value['title'] ?></h3>

				<h4><?php echo $value['author'];?></h4>

				<h5><?php echo $value['year'];?></h5>
			</div>

		<?php } ?>			
		

		</main>


	</div>



</body>

</html>