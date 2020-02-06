class Controlador {
  constructor(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
  }
  async confirmarPerro(nombre, vote) {
    let perrosN = await this.modelo.obtenerListaPerros();
    this.ordenacion(perrosN);
    perrosN.forEach(function(perro) {
      if (perro.nombre == nombre) {
        perro.voto += vote;
      }
    });
    await this.vista.pasarMiUrl();
    this.modelo.notificar();
    return perrosN;
  }
  ordenacion(perrosN) {
    perrosN.sort(function(a, b) {
      if (a.voto > b.voto) {
        return 1;
      }
      if (a.voto < b.voto) {
        return -1;
      }
      return 0;
    });
    for (let i = 0; i < 5; i++) {
      this.vista.mostrarTop(perrosN[perrosN.length - (i + 1)]);
    }
    localStorage.setItem(
      "ganador",
      JSON.stringify(perrosN[perrosN.length - 1])
    );
  }
}

export default Controlador;
