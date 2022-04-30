const saludar = function(nombre){
    console.log(arguments);
    console.log('Hola '+nombre);
    return 1;
};

const saludar2 = (nombre)=>{
    console.log('Hola '+nombre);
};

const saludarFlecha = () =>{
    console.log("Saludar flecha!");
}

function sumar (a,b){
    return a+b;
}

function getAleatoria(){
    return Math.random();
}

const sumar2 = (a,b) => a+b; 

let numero = saludar('Ricardo',40,false,'Si como no');

saludar2('Sophia');
console.log(sumar(1,5));
console.log(sumar2(1,2));
console.log(getAleatoria());
saludarFlecha();