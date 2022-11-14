/* Calculafora com as 4 operações*/

function Calculadora(){
    num1= document.getElementById("num1").value
    num2= document.getElementById("num2").value

    operador = document.querySelector("Input[name=opt]:checked").value
    resultado = eval(parseInt(num1)+ operador + parseInt(num2));

    document.getElementById("mostrar-resultado").innerHTML = resultado;
}

//Calculadora de potencia
function Calculadora(){
    numerador = document.getElementById("numerador").value;
    expoente = document.getElementById("expoente").value;
    resultado = eval(Math.pow(parseInt(numerador), parseInt(expoente)));
    document.getElementById("resultado").innerHTML = resultado;
}