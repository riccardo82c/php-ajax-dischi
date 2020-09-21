/* let $ = require(jquery); */

$(function () {
	ajaxCall('All');
	filterCall();

	$('#filter').change(function () {

		let valore = $('#filter').val();
		$('main').empty();
		ajaxCall(valore);
		console.log(valore);
	})

});


function ajaxCall(data) {
	$.ajax({
		url: `http://localhost/php-ajax-dischi/server.php`,
		method: 'GET',
		data: {
			author: data
		},
		success: function (response) {
			allDisc(response);


		},
		error: function () {
			console.log('Errore!');
		}
	});
}


function filterCall() {
	$.ajax({
		url: `http://localhost/php-ajax-dischi/server.php`,
		method: 'GET',
		success: function (response) {

			filter(response);
		},
		error: function () {
			console.log('Errore!');
		}
	});
}


function allDisc(data) {
	let source = $("#disc-template").html();
	let template = Handlebars.compile(source);
	data.forEach(element => {
		let html = template(element);
		$('main').append(html);
	});
}

function filter(data) {

	let filterAuthor = [];
	data.forEach(element => {
		!filterAuthor.includes(element['author']) ? filterAuthor.push(element['author']) : '';
	});
	console.log(filterAuthor);

	let source = $("#filter-template").html();
	let template = Handlebars.compile(source);
	let context = {
		author: 'All'
	};

	let html = template(context);
	$('#filter').append(html);

	filterAuthor.forEach(element => {

		let context = {
			author: element
		};

		let html = template(context);
		$('#filter').append(html);
	});


}