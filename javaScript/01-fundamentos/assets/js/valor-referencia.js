let a = 10;
let b = a;

a = 20;


console.log({a,b});

let juan = {nombre:'Juan'};
let ana  = juan;//SE ESTA PASANDO POR REFEREBCIA:
//SE ESTA HACIENDO UNA COPIA:(VALOR) 
//PERO ana ahora es un objeto que tiene dentro otro objeto
//ana = {juan};
ana = {...juan};//AGREGAMOS OPERADOR SPREED(separa elementos y rompe referencia)
ana.nombre = 'Ana';
console.log({ana,juan});

//EN JAVA SCRIPT TODOS LOS OBEJETOS SON PASADOS POR REFERENCIA.
//PRIMITIVOS--VALOR
//OBJETOS --REFRENCIA


// const cambiaNombre = (persona)=>{
//     persona.nombre = 'Tony';
//     return persona;
// };

const cambiaNombre = ({...persona})=>{
    persona.nombre = 'Tony';
    return persona;
};

let peter ={nombre:'Peter'};
let tony = cambiaNombre(peter);
console.log({peter,tony});

//tres puntos (ROMPER RELACION DE PASO POR REFERENCIA)
//parametro rest como argumento (une todos los argumentos y tranfsormalo en un array )
//spreed simboliza separa los elementos:

//arreglos: //rompiendo referencia con el operaodr spreed
const frutas = ['Manzana','Pera','Piña'];
let otrasFrutas = frutas;
frutas.push('Mango');

console.time("Spreed");
otrasFrutas = [...frutas];//separa y rompe referencia
console.timeEnd("Spreed");

frutas.push('Mandarina');

console.time("Slice");
otrasFrutas = frutas.slice();//separa y rompe referencialo hace m'as lento
console.timeEnd("Slice");

frutas.push('Jitomate');

console.table({frutas,otrasFrutas});
console.table({frutas,otrasFrutas});
console.table({frutas,otrasFrutas});

//IFELSE RAPIDO Y SENCILLO:
const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});
//DOBLE IGUAL PARA VER SI ES IGUAL SIN IMPORTAR TIPADO 
if(dia == '5'){
    console.log('Domingo');
}else{
    console.log('No es domingo');
}

//EVALUA VALOR Y TIPADO DE DATO:(identico):
if(dia === '5'){
    console.log('Domingo');
}else{
    console.log('No es domingo');
}

dia = 10;

const dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"];
console.log(dias[dia] || "Día no definido");//si no es null o undefine manda Día no definido

//LOGICA BOOLEANA:

const regresaTrue = () => {
    console.log("Regresa true");
    return true;
}

const regresaFalse = () => {
    console.log("Regresa false");
    return false;
}

console.log(!true);

//PROTIP
//ASIGNACIONES CON OPERADORES:
const soyUndefined = undefined;
const doyNull = null;
const soyFalso = false;

const a1 = true && "Hola mundo" && 150; //se pregunta si cada elemtno tiene un valor o si es positivo 
const a2 = false && "adios mundo"; //como es falso, no entra:
const a3 = "Hola" && "mundo";
const a4 = "Hola" && "mundo" && soyFalso && true;
const a5 = soyFalso || "Ya no soy falso";
const a6 = soyFalso || doyNull || soyUndefined || "Ya no soy falso de nuevo";
console.log(a1,a2,a3,a4,a5,a6);
