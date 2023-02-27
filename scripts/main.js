//funcion que aplica estilo a la opcion seleccionada en el menu y quita el estilo a la previamente seleccionada
function seleccionar(link) {
	var opciones = document.querySelectorAll("#links a");
	opciones[0].className = "";
	opciones[1].className = "";
	opciones[2].className = "";
	opciones[3].className = "";
	opciones[4].className = "";

	link.className = "seleccionado";

	//hacemos desaparecer el menu una vez que se ha selecionado la opcion en el modo responsive

	var x = document.getElementById("nav"); 
	x.className = "";
}

//funcion que muestra el menu responsive

function responsiveMenu(){
	var x = document.getElementById("nav"); 
	if (x.className === "") {
		x.className = "responsive";
	} else {
		x.className = "";
	}
}