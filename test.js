// function nombreCompleto(name,lastname){
//     return name + ' ' + lastname
// };
// function saludo(name,lastname,nick){
//     const completeName = nombreCompleto(name,lastname);
//     console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nick + ".");
// };


  
//     const tipoDeSuscripcion = "Basic";
//     switch (tipoDeSuscripcion) 
//     { case "Free": console.log("Solo puedes tomar los cursos gratis");
//      break;
//     case "Basic": 
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
//     break;
//     case "Expert":
//          console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//           break; 
//    case "ExpertPlus": 
//    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//     break; }
   º

//     if(  tipoDeSuscripcion == 'free' ){
//         console.log("Solo puedes tomar los cursos gratis");
//     }else if (tipoDeSuscripcion == 'Basic'){
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//     }else if( tipoDeSuscripcion == 'expert'){
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//     }else if( tipoDeSuscripcion == 'expertDuo'){
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//     }

// let resultado = prompt("Escribe el resultado de la siguiente operación matemática: 2 + 2 = ?");
// while (resultado != 4) {
//     alert("El resultado es incorrecto, vuelva a intentar");
//     resultado = prompt("Escribe el resultado de la siguiente operación matemática: 2 + 2 = ?");
// }
// alert("Felicitaciones, esta respuesta es correcta");

// let respuesta;
//  while (while respuesta != 4){
//      let pregunta = prompt('cuanto es 2+2')
//      respuesta=pregunta;
//  }

// function imprimirPrimerElementoArray(arr){
//     console.log(arr[0])
// };
// function imprimirElementoPorElemento(arr){
//     for(let i=0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// };
// function imprimirElementoPorElementoObejeto(obj){
//     const arr = Object.values(obj);
//     for(let i=0; i < arr.length ; i ++){
//         console.log(arr[i])
//     }
// };


// function tipoSuscripcion(suscripcion){

//     if( suscripcion == 'free' ){
//         console.log("Solo puedes tomar los cursos gratis");
//         return;
//     } if (suscripcion == 'basic'){
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//         return;
//     } if(suscripcion == 'expert'){
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//         return;
//     }if(suscripcion == 'expertplus') {
//     }
//     console.warn('este tipo de suscripicon no existe');
//     };

const tiposDeSuscriciones ={
    free:'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertDuo:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',

};
function conseguirTipoSus(suscripicon){
    if(tiposDeSuscriciones[suscripicon]){
        console.log(tiposDeSuscriciones[suscripicon]);
        return;
    }
    console.warn('Ese tipo de suscripcion no existe');
};