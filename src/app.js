/* let $ = require(jquery); */

$(function () {
	ajaxCall();
});


function ajaxCall() {
	$.ajax({
		url: `http://localhost/php-ajax-dischi/dischi-db.php`,
		method: 'GET',
		success: function (response) {
			allDisc(response);
			/* filter(response); */
		},
		error: function () {
			console.log('Errore!');
		}
	});
}


function allDisc(data) {
	let source = $("#entry-template").html();
	let template = Handlebars.compile(source);
	data.forEach(element => {
		let html = template(element);
		$('main').append(html);
	});
}

/* function filter(data) {
	console.log(data[0]['author']);

	

} */