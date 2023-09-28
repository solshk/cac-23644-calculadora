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
    } else if (btnValor === "DEL") {
        pantalla.value = pantalla.value.slice(0, -1);
    } else if (btnValor === "=") {
        // console.log(pantalla.value);
        try {
            if (resultado = math.evaluate(pantalla.value)) {
                pantalla.value = resultado;
                console.log("Funcionaa");
            } else {
                throw new Error('Algo salio mal');
            }
        } catch (error) {
            console.log(error);
            alert("Eso no es un cuenta que pueda resolver (°n°)");
        };

    } else {
        pantalla.value += btnValor;
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calcular(e.target.dataset.value));
});