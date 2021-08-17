// 4. Se debe investigar almenos 3 apis publicas y
//    se debe mostrar un ejemplo de su consumo en una pagina web de 1 vista por cada api.

// == API Perros ===
const apiDogs = () => {

    // NumChar es el límite del ciclo, osea va hasta lo que ingresó el usuario
    for(let i = 1; i <= 3; i++){
      let url = `https://dog.ceo/api/breeds/image/random`;
    
        // Fetch
        fetch(url)
            .then((res) => res.json()) // Recibe un json y retorna un valor que recibe el siguiente .then
            .then((data) => print(data)) // Recibe la data de la petición
            .catch((err) => console.log(err));
    }

    const print = (data) => {
        card = `
        <div class="col-12 col-sm-6 col-md-4">
            <div class="card m-2 p-0">
            <img src="${data.message}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h6 class="card-title">Status: ${data.status}</h6>
                </div>
            </div>
        </div>
        `;
    
      document.querySelector('#dogContainer').innerHTML += card
    }
    
}

//Escondiendo api perros
const hideDogs = () => {

    document.querySelector('#dogContainer').innerHTML = ``;

}


// == API anime ==


const apiAnime = () => {

    for(let i = 1; i <= 3; i++){
      let url = `https://rickandmortyapi.com/api/character/${i}`;
    
        // Fetch
        fetch(url)
            .then((res) => res.json()) // Recibe un json y retorna un valor que recibe el siguiente .then
            .then((data) => print(data)) // Recibe la data de la petición
            .catch((err) => console.log(err));
    }

    const print = (data) => {
        card = `
        <div class="col-12 col-sm-6 col-md-4">
            <div class="card m-2 p-0">
            
                <div class="card-body">
                  <h6 class="card-title">Status: ${data.id}</h6>
                  <h6 class="card-title">Status: ${data.name}</h6>
                </div>
            </div>
        </div>
        `;
    
      document.querySelector('#animeContainer').innerHTML += card
    }
    
}

//Escondiendo api perros
const hideAnime = () => {

    document.querySelector('#animeContainer').innerHTML = ``;

}