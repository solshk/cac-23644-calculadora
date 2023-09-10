const pantalla = document.querySelector(".pantalla");
const buttons = document.querySelectorAll("button"); //<- esto me develve una lista de nodos
const numeros = [document.querySelector(".cero")];
const operadores = ["+", "-", "*", "/", "=", "%", "C"];

const depurar = (btnValor) => {
    // console.log(btnValor);
    let inicio = "0";

    if (
        (btnValor == "00" || btnValor == "%" || btnValor == "+" || btnValor == "*" || btnValor == "/" || btnValor == "=")
        && pantalla.value == "0"
    ) {
        pantalla.value = inicio;
    } else if (pantalla.value == "0" && btnValor !== "C") {
        pantalla.value = btnValor;
    } else if (btnValor === "C") {
        pantalla.value = inicio;
    } else if (btnValor === "=") {
        console.log(pantalla.value);
        //   resultado = "TTuTT";
        resultado = math.evaluate(pantalla.value);
        pantalla.value = resultado;
    } else {
        pantalla.value += btnValor;
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => depurar(e.target.dataset.value));
});
