/* Etudes-Et-Vie
 *
 * JS Document - /js/script.js
 *
 * coded by Jérôme Poucet
 * started at 26.10.2013
 */

/* jshint boss: true, curly: true, eqeqeq: true, eqnull: true, immed: true, latedef: true, newcap: true, noarg: true, browser: true, jquery: true, noempty: true, sub: true, undef: true, unused: true, white: false */

function save_product(){
	var product = document.getElementsByClassName('produit');

	// On met l'objet dans le storage
	localStorage.setItem("nameProduct", JSON.stringify(figcaption.value));

	// On reprend l'objet du storage
	var retrieveProduct = localStorage.getItem("name");

	console.log('retrieveProduct:', JSON.parse(retrieveProduct));
}


	// var dataGroup = document.getElementsByClassName('produit')[0];
	// var product = { 'dataGroup':1 };

	// // Put the object into storage
	// localStorage.setItem('product', JSON.stringify(product));

	// // Retrieve the object from storage
	// var retrievedObject = localStorage.getItem('product');

	// console.log('retrievedObject: ', JSON.parse(retrievedObject));
