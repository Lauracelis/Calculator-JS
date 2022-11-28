//1.Creación de dos variables constantes
//2. Usamos querySelector para acceder a los elemtos del nodo, en este caso el id display y la clase buttons
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
buttons.forEach((item) => {
    //La propiedad onclick specifica un escuchador de eventos y lo recibe. Ocurre cuando el usuario hace click sobre el evento.
  item.onclick = () => {
    if (item.id == "clear") {
        //innerText representa el contenido de texto representado de un nodo
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
}