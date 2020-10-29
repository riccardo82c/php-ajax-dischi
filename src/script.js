/* Per permettere il funzionamento di Jquery e HB con i moduli installati */
const $ = require('jquery');
const Handlebars = require('handlebars');

/* Costante location per la location corrente del mio server virtuale */
const hostname = window.location.hostname;
const protocol = window.location.protocol;
const port = window.location.port;
const location = `${protocol}//${hostname}/${port}`;


$(function () {
	ajaxCallDisc();
	ajaxCallFilter();
	$('#filter').change(function () {
		let valore = $(this).val();
		$('main').empty();
		ajaxCallDisc(valore);
	})
});

/* Functions */

// chiamata ajax al database
function ajaxCallDisc(data) {
	$.ajax({
		url: `${location}Repo/php-ajax-dischi/server.php`,
		method: 'GET',
		data: {
			author: data
		},
		success: function (response) {
			getDisc(response);
		},
		error: function () {
			console.log('Errore!');
		}
	});
}

// estrapolazione dalla richiesta ajax dell'array corrispondete all'elemento selezionato in select (autore)
function getDisc(data) {
	let source = $("#disc-template").html();
	let template = Handlebars.compile(source);
	data.forEach(element => {
		let html = template(element);
		$('main').append(html);
	});
}

// chiamata ajax per la richiesta del db
function ajaxCallFilter() {
	$.ajax({
		url: `${location}Repo/php-ajax-dischi/server.php`,
		method: 'GET',
		success: function (response) {
			filter(response);
		},
		error: function () {
			console.log('Errore!');
		}
	});
}


// estrapolazione dal db degli autori senza duplicati ed inserimento di essi nella select nel DOM
function filter(data) {
	console.log(data);
	let filterAuthor = [];
	let source = $("#filter-template").html();
	let template = Handlebars.compile(source);

	data.forEach(element => {
		if (!filterAuthor.includes(element['author'])) {
			filterAuthor.push(element['author']);
			let context = {
				author: element['author']
			};
			let html = template(context);
			$('#filter').append(html);
		}
	});
}