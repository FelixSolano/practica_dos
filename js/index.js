



function mostrarinicio(){
	
	$.get("inicio.html", function (response) {

		$("#divcontenido").html(response);
	
	});

	
}



function grabado(){
	
	
alert("SR(@)"+$("#txtnombres").val() + " fue grabado "+ $("#txtcelulares").val());
	

}




