let temperatura = document.getElementById("temperature");
let resultado = document.getElementById("resultado");

temperatura.addEventListener("input", convertToFahrenheight);


const convertToFahrenheight = (temperatura) => (Number(temperatura) * 9) / 5 + 32;
resultado = convertToFahrenheight;