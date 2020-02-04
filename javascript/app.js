import Modelo from "./modelo.js";
// import Controlador from "./controlador.js";
// import Vista from "./vista.js";
import Servicios from "./servicios.js";

const servicios = new Servicios();
const modelo = new Modelo(servicios);
// const controlador = new Controlador(modelo);
// const vista = new Vista(controlador);

// modelo.obtenerListaPerros().then(perros => console.log(perros));
