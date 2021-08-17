// 4. Se debe investigar almenos 3 apis publicas y
//    se debe mostrar un ejemplo de su consumo en una pagina web de 1 vista por cada api.

// == API Perros ===
const apiDogs = () => {

    // NumChar es el límite del ciclo, osea va hasta lo que ingresó el usuario
    for(let i = 1; i <= 9; i++){
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

    for(let i = 1; i <= 9; i++){
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    
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
            <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-info"><b>Nombre</b>: ${data.name}</h5>
                  <h6 class="card-title"><b>iD</b>: ${data.id}</h6>
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


// == API Cinema ==

const apiCinema = () => {

    for(let i = 1; i <= 9; i++){
      let url = `http://www.omdbapi.com/?t=${i}&apikey=22fbac64`;
    
        // Fetch
        fetch(url)
            .then((res) => res.json()) // Recibe un json y retorna un valor que recibe el siguiente .then
            .then((data) => print(data)) // Recibe la data de la petición
            .catch((err) => console.log(err));
    }

    const print = (data) => {
        card = `
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="card m-2 p-0">
            <img src="${data.Poster}" class="card-img-top" alt="...">
            <div class="card-body p-0">
              <div>
              <h5 class="px-3 mt-3 text-info"><b>${data.Title}</b></h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><h6 class="card-title my-1"><b>Genero</b>: ${data.Genre}</h6></li>
                <li class="list-group-item"><h6 class="card-title my-1"><b>Director</b>: ${data.Director}</h6></li>
                <li class="list-group-item"><h6 class="card-title my-1"><b>Duración</b>: ${data.Runtime}</h6></li>
                <li class="list-group-item"><h6 class="card-title my-1"><b>Lanzamiento</b>: ${data.Released}</h6></li>
              </ul>
            </div>
          </div>
        </div>
        `;
    
      document.querySelector('#cinemaContainer').innerHTML += card
    }
    
}

//Escondiendo api perros
const hideCinema = () => {

    document.querySelector('#cinemaContainer').innerHTML = ``;

}