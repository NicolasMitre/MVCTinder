// controlador

function confirmarPerro(nombre, vote) {
  ordenacion();
  for (i = 0; i < perro.length; i++) {
    if (perro[i].nombre == nombre) {
      perro[i].voto += vote;
    }
  }
  start()
    .then(function(data) {
      pasarUrl(data);
    })
    .catch(function(e) {
      console.error("no se encuentra el archivo json");
      console.log(e);
    });
}

// controlador
start()
  .then(function(data) {
    pasarUrl(data);
  })
  .catch(function(e) {
    console.error("no se encuentra el archivo json");
    console.log(e);
  });

// vista
function pasarUrl(url) {
  mostrarFoto(url)
    .then(function(data) {
      document.getElementById("main").src = data.message;
      mostrarTitulo(url.message);
    })
    .catch(function(e) {
      console.error("no se encuentra el archivo json");
      console.log(e);
    });
}

//vista

function mostrarTitulo(mensaje) {
  document.getElementById("titulo").textContent = mensaje;
}
// vista
function votarSi() {
  nombre = document.getElementById("titulo").textContent;

  // controlador
  confirmarPerro(nombre, 1);
}
// Vista
function votarNo() {
  nombre = document.getElementById("titulo").textContent;

  // CONTROLADOR
  confirmarPerro(nombre, 0);
}
//controlador

function ordenacion() {
  perro.sort(function(a, b) {
    if (a.voto > b.voto) {
      return 1;
    }
    if (a.voto < b.voto) {
      return -1;
    }
    return 0;
  });
  for (i = 0; i < 5; i++) {
    mostrarTop(perro[perro.length - (i + 1)]);
  }
  localStorage.setItem("ganador", JSON.stringify(perro[perro.length - 1]));
}

// vista

function mostrarTop(top) {
  const ul = document.getElementById("ul");
  var il = document.createElement("il");
  var br = document.createElement("br");
  il.textContent = "nombre: " + top.nombre + " / " + " votos: " + top.voto;
  il.appendChild(br);
  ul.appendChild(il);
}

// vista
function borrar() {
  const ul = document.getElementById("ul");
  for (i = 0; i < 50; i++) {
    ul.removeChild(ul.lastChild);
  }
}

// vista

function ganador() {
  var ganador = JSON.parse(localStorage.getItem("ganador"));
  mostrarTitulo(ganador.nombre);
  mostrarGanador(ganador)
    .then(function(data) {
      console.log(data);

      document.getElementById("main").src = data.message;
    })
    .catch(function(e) {
      console.error("no se encuentra el archivo json");
      console.log(e);
    });
  console.log(ganador);
}
