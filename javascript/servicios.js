class Servicios {
  constructor() {}
  async start() {
    try {
      var response = await fetch("https://dog.ceo/api/breeds/list/random");
      var data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async coleccionPerro() {
    try {
      var response = await fetch("https://dog.ceo/api/breeds/image/random");
      var data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async mostrarGanador(url) {
    try {
      var response = await fetch(
        "https://dog.ceo/api/breed/" + url.nombre + "/images/random"
      );
      var data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async mostrarFoto(url) {
    try {
      var response = await fetch(
        "https://dog.ceo/api/breed/" + url.message + "/images/random"
      );
      var data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  async conseguirLista() {
    try {
      var response = await fetch("https://dog.ceo/api/breeds/list");
      var data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default Servicios;
