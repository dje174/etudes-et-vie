/* Etudes-Et-Vie
 *
 * JS Document - /js/script.js
 *
 * coded by Jérôme Poucet
 * started at 26.10.2013
 *//* jshint boss: true, curly: true, eqeqeq: true, eqnull: true, immed: true, latedef: true, newcap: true, noarg: true, browser: true, jquery: true, noempty: true, sub: true, undef: true, unused: true, white: false */function save_product(){var e=document.getElementsByClassName("produit");localStorage.setItem("nameProduct",JSON.stringify(figcaption.value));var t=localStorage.getItem("name");console.log("retrieveProduct:",JSON.parse(t))};