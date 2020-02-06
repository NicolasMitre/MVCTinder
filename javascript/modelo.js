class Modelo {
  constructor(servicios) {
    this.servicios = servicios;
    this.perros = [];
    this.observadores = [];
  }

  async obtenerListaPerros() {
    if (this.perros.length > 0) {
    } else {
      const data = await this.servicios.conseguirLista();
      let perrosAPI = await data.message;
      this.perros = perrosAPI.map(perro => ({ nombre: perro, voto: 0 }));
    }
    return this.perros;
  }
  suscribirse(callback) {
    this.observadores.push(callback);
  }
  notificar() {
    this.observadores.forEach(observador => observador(this.perros));
  }
}

export default Modelo;
