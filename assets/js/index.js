const pantalla = document.querySelector(".pantalla");
const buttons = document.querySelectorAll("button"); //<- esto me develve una lista de nodos
const operadores = ["+", "-", "*", "/", "=", "%"];

const calcular = (btnValor) => {
    let inicio = "0";

    if (
      pantalla.value == "0" &&
      (btnValor == "00" ||
        btnValor == "%" ||
        btnValor == "+" ||
        btnValor == "*" ||
        btnValor == "/" ||
        btnValor == "=")
    ) {
        pantalla.value = inicio;
    } else if (
      operadores.includes(pantalla.value) &&
      operadores.includes(btnValor)
    ) {
        pantalla.value = "-"
    } else if (btnValor == "." && pantalla.value == "0") {
        pantalla.value = "0.";
    } else if (pantalla.value == "0" && btnValor !== "C") {
        pantalla.value = btnValor;
    } else if (btnValor === "C") {
        pantalla.value = inicio;
    } else if (btnValor === "=") {
        // console.log(pantalla.value);
        resultado = math.evaluate(pantalla.value);
        pantalla.value = resultado;
    } else {
        pantalla.value += btnValor;
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calcular(e.target.dataset.value));
});