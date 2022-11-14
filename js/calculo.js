let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){
        if(this.innerHTML=="="){
            value.innerHTML = eval(value.innerHTML);
        }
        else{
            if(this.innerHTML=="Clear"){
            value.innerHTML = "";
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}

function power(){

    let buttons = document.querySelector('.buttons');
    let btn = document.querySelectorAll('span');
    let value = document.getElementById('value');

    base = document.getElementById("base").value;

    expoente = document.getElementById("expoente").value;

    result = eval(Math.pow(parseInt(base), parseInt(expoente)));

    document.getElementById("result").innerHTML = result;
}