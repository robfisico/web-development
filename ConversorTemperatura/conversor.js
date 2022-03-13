function Converter(){
    var temperatura = document.getElementById("temperature");
    var valorTemperatura=temperatura.value;
    var valorCelsius=parseFloat(valorTemperatura);

    var valorConvertido = (valorCelsius * 9)/5 + 32;
    var resultado = valorConvertido.toFixed(1)
    //console.log(resultado)


    var saida = document.getElementById("resultados");
    var qualquer = "O resultado em Graus Fahrenheit é " + resultado;
    saida.innerHTML = qualquer;
  //  saida = resultado;

}
//var resultado = document.getElementById("valorConvertido");
//var valorConvertido = "O resultado em Graus Fahrenheit é " + total;
//resultado.innerHTML = valorConvertido;