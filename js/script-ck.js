/* Etudes-Et-Vie
 *
 * JS Document - /js/script.js
 *
 * coded by Jérôme Poucet
 * started at 26.10.2013
 *//* jshint boss: true, curly: true, eqeqeq: true, eqnull: true, immed: true, latedef: true, newcap: true, noarg: true, browser: true, jquery: true, noempty: true, sub: true, undef: true, unused: true, white: false */// var product = document.getElementById('nameProduct').innerHTML;
function save_product(){if(!localStorage)return!1;localStorage.setItem("nameProduct",JSON.stringify(product));var e=localStorage.getItem("nameProduct"),t=document.getElementById("nombreArticles");console.log("retrieveProduct:",JSON.parse(e))}var product=document.getElementById("nameProduct").innerHTML,button=document.getElementsByClassName("add");button=window.document.addEventListener("click",save_product,!1);