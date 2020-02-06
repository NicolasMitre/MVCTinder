class Vista {
  constructor(servicio) {
    this.servicio = servicio;
  }
  async pasarMiUrl() {
    let url = await this.servicio.start();
    let data = await this.servicio.mostrarFoto(url);
    document.getElementById("main").src = data.message;
    await this.mostrarTitulo(url.message);
    return data;
  }
  async mostrarTitulo(mensaje) {
    document.getElementById("titulo").textContent = mensaje;
  }
  async mostrarTop(top) {
    const ul = document.getElementById("ul");
    var il = document.createElement("il");
    var br = document.createElement("br");
    il.textContent = "nombre: " + top.nombre + " / " + " votos: " + top.voto;
    il.appendChild(br);
    ul.appendChild(il);
  }
  async borrar() {
    const ul = document.getElementById("ul");
    for (let i = 0; i < ul.childElementCount; i++) {
      ul.removeChild(ul.lastChild);
    }
  }
  async obtenerGanador() {
    let ganador = await JSON.parse(localStorage.getItem("ganador"));
    await this.mostrarTitulo(ganador.nombre);
    await this.mostrarGanador(ganador);
    document.getElementById("main").src = data.message;
    return ganador;
  }
  async votar() {
    const nombre = await document.getElementById("titulo").textContent;
    this.pasarMiUrl();
    return nombre;
  }
}
export default Vista;
