const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnclick(){
   const sumaInputs = innertext = parseInt(input1.value) + parseInt(input2.value);
    //pResult.innertext = "El resultado de la suma es :" + sumaInputs; 
    // const sumaInputs = input1.value + input2.vale;
     pResult.innerHTML = "El resultado es: " + sumaInputs;
    //console.log(sumaInputs);
}

function btnOnclick1(){
    const restaInputs = innertext = parseInt(input1.value) - parseInt(input2.value);
    pResult.innerHTML = "El resultado es : " + restaInputs;
}

function btnOnclick2(){
    const multiInputs = innertext = parseInt(input1.value) * parseInt(input2.value);
    pResult.innerHTML = "El resultado es : " + multiInputs;
}
function btnOnclick3(){
    const divInputs = innertext = parseInt(input1.value) /  parseInt(input2.value);
    pResult.innerHTML = "El resultado es : " + divInputs;
}




