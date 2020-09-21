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
			filter(response);
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

function filter(data) {

	let filterAuthor = [];
	data.forEach(element => {
		!filterAuthor.includes(element['author']) ? filterAuthor.push(element['author']) : '';
	});
	console.log(filterAuthor);

	let source = $("#entry-template2").html();
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