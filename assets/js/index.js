const pantalla = document.querySelector(".pantalla");
const buttons = document.querySelectorAll("button"); //<- esto me develve una lista de nodos
const operadores = ["+", "-", "*", "/", "=", "%", "C"];




const calcular = (btnValor) => {
    // console.log(btnValor);
    let devolucion = "0";
    let resultado = "";

    if (pantalla.value == "0") {
        pantalla.value = btnValor;
    } else if (btnValor === "C") {
        pantalla.value = devolucion;
    } else if (btnValor === "=") { 
        resultado = "estoy haciendo la cuenta paciencia plz";
        pantalla.value = resultado;
    } else {
      pantalla.value += btnValor;
    }
    

    // operadores.includes(btnValor) == true
   
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calcular(e.target.dataset.value));
});