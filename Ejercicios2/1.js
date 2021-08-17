// 1. Se debe escribir un algoritmo que permita contar el numero de letras que tiene una palabra

//     restricciones -> Se debe usar almenos un for

function ejercicio1() {
	console.log('hola');
	const inputPalabra = document.getElementById('inputPalabra').value;
	// const inputPalabra = 'HOLA MUNDO';
	let palabraDividida = inputPalabra.split(' ');

	let cantiadadLetras = palabraDividida.length;
	console.log(cantiadadLetras);

	let str = inputPalabra;
	let arr = [];
	for (let i of str) {
		arr.push(i);
	}

	let numeroLetras = arr.length;
	console.log();
	document.getElementById(
		'resultado1'
	).innerHTML = 
	`<div class="alert alert-warning m-2" role="alert">
    El numero de letras de la palabra <span class="alert-link">${inputPalabra} es ${numeroLetras}</span>
  </div> `;
}
