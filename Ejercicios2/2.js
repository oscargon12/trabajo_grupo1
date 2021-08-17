// 2. Se debe escribir un algoritmo que permita contar las palabras dentro de un parrafo

//     restricciones -> Se debe usar almenos un for

function ejercicio2() {
	const inputPalabras = document.getElementById('inputPalabras').value;
	// const inputPalabra = 'HOLA MUNDO';
	let palabraDividida = inputPalabras.split(' ');

	let cantiadadPalabras = palabraDividida.length;
	console.log(cantiadadPalabras);

	console.log();
	document.getElementById(
		'resultado2'
	).innerHTML = 
	`<div class="alert alert-warning m-2" role="alert">
    El numero de palabras de <span class="alert-link">${inputPalabras} es ${cantiadadPalabras}</span>
  </div> `;
}
