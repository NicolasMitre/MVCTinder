class Modelo {
  constructor(servicios) {
    this.servicios = servicios;
  }

  async obtenerListaPerros() {
    const data = await this.servicios.conseguirLista();
    let perros = await data.message;
    let perrosResult = perros.map(perro => ({ nombre: perro, voto: 0 }));
    return perrosResult;
  }
}

export default Modelo;
