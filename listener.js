const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInpuntsValues);

function sumarInpuntsValues(){


    Event.preventDefault();
    const sumarInpuntsValues = input1.value + input2.vale;
    pResult.innerHTML = "Resultado: " + sumaInputs; 

}

