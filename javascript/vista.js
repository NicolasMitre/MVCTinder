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
  borrar() {
    document.getElementById("ul").innerHTML = `<ul></ul>`;
  }
  async obtenerGanador() {
    let ganador = JSON.parse(localStorage.getItem("ganador"));
    this.mostrarTitulo(ganador.nombre);
    ganador = await this.servicio.mostrarGanador(ganador);
    document.getElementById("main").src = ganador.message;
    return ganador;
  }
  async votar() {
    const nombre = await document.getElementById("titulo").textContent;
    return nombre;
  }
}
export default Vista;
