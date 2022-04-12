import ingresaValor from "./TorosVacas";

const codigo = document.querySelector("#codigo");
const codigoAdivina = document.querySelector("#codigoAdivina")
const form = document.querySelector("#torosVacas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const codigo = Number.parseInt(codigo.value);
  const codigoAdivina = Number.parseInt(codigoAdivina.value);

  div.innerHTML = "<p>" + ingresaValor(codigo,codigoAdivina) + "</p>";
});
