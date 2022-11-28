//FUNCIONALIDAD CALCULADORA
//1.Creación de dos variables constantes
//2. Usamos querySelector para acceder a los elemtos del nodo, en este caso el id display y la clase buttons
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
buttons.forEach((item) => {
    //La propiedad onclick specifica un escuchador de eventos y lo recibe. Ocurre cuando el usuario hace click sobre el evento.
  item.onclick = () => {
    if (item.id == "clear") {
        //innerText representa el contenido de texto representado de un nodo, de tal manera que lo que ingrese el usuario en ese nodo button, se limpiara todos los números que estaban en pantalla y uedara vacío
      display.innerText = "";
    } else if (item.id == "backspace") {
        //el método to.String devuelve ua cadena como una cadena sin cambiar la cadena orginal.
      let string = display.innerText.toString();
       //el método .substr() extrae una pate de la  cadena, comienza en un posición específica y devuelve un número específico de caracteres, en este caso se le indica que comienza en la posición 0 y con el parámetro .length extrae el número de caracteres que se le asigne, en este caso -1
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
        // el método eval evalua o ejecuta un argumento, en este caso los caracteres que se ingresan y da un resultado
      display.innerText = eval(display.innerText);

    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      // El método setTimeout llama a la función después de x cantidad de milisegundos, en este caso, 2000
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
        //el operador de asignación de suma += agrega un valor a una variable, por lo tanto en este caso los número que se ingresen, automáticamente se asignaran en la variable item
      display.innerText += item.id;
    }
  };
});

//FUNCIONALIDAD DARK/LIGTH MOOD
//1. Se declaran tres variables constantes
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
//2. Se decalara una variable booleana verdadera
let isDark = true;
// Se utiliza el método onClick en la función para que al momento en el que el usuario da clic al botón, la calculadora cambie de color
themeToggleBtn.onclick = () => {
    //Utilizamos el método classList para devolver el nombre de clase css del elemento y para poder alternar entre dark-activ, se utiliza al propiedad toggle la cual agrega y elimina un nombre de clase al elemento anteriormente seleccionado
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
}