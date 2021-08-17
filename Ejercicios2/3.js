// 3. Se debe realizar un algotitmo donde se pueda ingresar la edad de 5 personas, este debe retornar una promesa
//     resuelta -> si todos los integrantes son de mas de 18 años
//     rechazada -> si almenos 1 de los integrantes es menor de 18 años

// let integrante1 = parseInt(document.getElementById('integrante1').value);
// let integrante2 = parseInt(document.getElementById('integrante2').value);
// let integrante3 = parseInt(document.getElementById('integrante3').value);
// let integrante4 = parseInt(document.getElementById('integrante4').value);
// let integrante5 =



function ejercicio3(){
	
	let integrante1 = parseInt(document.getElementById(`integrantes1`).value)
	let integrante2 = parseInt(document.getElementById(`integrantes2`).value)
	let integrante3 = parseInt(document.getElementById(`integrantes3`).value)
	let integrante4 = parseInt(document.getElementById(`integrantes4`).value)
	let integrante5 = parseInt(document.getElementById(`integrantes5`).value)
	let store = []
	store.push(integrante1)
	store.push(integrante2)
	store.push(integrante3)
	store.push(integrante4)
	store.push(integrante5)

	const p = new Promise((resolve, reject) => {
		let numero = true;
		for (let x of store) {
			if (x < 18) {
				numero = false;
			}
		}
	
		if (numero === true) {
			resolve('Todos son mayores');
		} else {
			reject('No pueden ingresar');
		}
	});
	
	p.then((res) => {
		console.log('Exito ', res);
		document.getElementById(
			'resultado3'
		).innerHTML = `<div class="alert alert-warning m-2" role="alert">
		${res}!
	  </div>`;
	}).catch((error) => {
		console.log('error', error);
		document.getElementById(
			'resultado3'
		).innerHTML = `<div class="alert alert-warning m-2" role="alert">
		${error}!
	  </div>`;
	})
	
		
}


 

