import Modelo from "./modelo.js";
import Controlador from "./controlador.js";
import Vista from "./vista.js";
import Servicios from "./servicios.js";

const servicios = new Servicios();
const modelo = new Modelo(servicios);
const vista = new Vista(servicios);
const controlador = new Controlador(modelo, vista);

document.addEventListener("DOMContentLoaded", function() {
  vista.pasarMiUrl().then(data => console.log(data));

  document.getElementById("yes").addEventListener("click", function() {
    vista.votar().then(data => controlador.confirmarPerro(data, 1));
  });
  document.getElementById("no").addEventListener("click", function() {
    vista.votar().then(data => controlador.confirmarPerro(data, 0));
  });
  document.getElementById("ganador").addEventListener("click", function() {
    vista.obtenerGanador().then(data => console.log(data));
  });
  document.getElementById("borrar").addEventListener("click", function() {
    vista.borrar().then(data => console.log(data));
  });
});
