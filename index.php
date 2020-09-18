<?php
include __DIR__ .'/dischi-db.php';
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
			</nav>
		</header>
		<main>
			<?php foreach ($database as $value) : ?>
			<div class="disc">
				<img src="<?= $value['poster'] ?>" alt="" srcset="">
				<h3><?= $value['title'] ?></h3>
				<h4><?= $value['author'];?></h4>
				<h5><?= $value['year'];?></h5>
			</div>
			<?php endforeach ?>
		</main>
	</div>
</body>

</html>