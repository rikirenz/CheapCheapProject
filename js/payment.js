$( document ).ready(function() {
	var db = {};

	var itemsName = ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"];


	$.ajax({
		method: 'GET',
		url: 'php/db.json',
		success: function(d) {

			$("#balance").text(d["balance"] +" $");		
			$("#cart-count").text(d["cartCount"]);		

		},
		error: function(a,b,c) {
			alert('Ops... This is very embarrassing!');
		}
	});

	$("#home-button").click(function() {
		window.location.href = $('#riki').attr('href');	
	});
	
	$(function() {
	    $('.datepicker').datepicker();
  	});	


});