const personaje ={
    nombre:  'Tony Stark',
    codeName:'IronMan',
    vivo: false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70,
    },
    trajes:['Mark I','Mark V','HulkBuster'],
    'ultima-pelicula':'Infinity war',
};
//SE PUEDE ACCEDER COMO :

console.log(personaje.nombre);
console.log(personaje.coords.lat);
console.log(personaje.trajes[2]);
console.log(personaje['vivo']);//CORCHETES
console.log(personaje.vivo);//PUNTO
console.log(personaje["ultima-pelicula"]);

//MAS DETALLES:

delete personaje.edad;//ELIMINAR CAMPO EDAD DEL OBJETO
console.log(personaje);

//convierte el objeto en arrays
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

personaje.casado = true;//SE AGREGA CAMPO CASADO
console.log(personaje);

//const solo bloquea asignacion de nuevo valor 
//personaje = true;



Object.freeze(personaje);//PARA HACER BLOQUEO DE PROPIEDADES
personaje.dinero = 100000000000;

const propiedades = Object.getOwnPropertyNames(personaje);
const values = Object.values(personaje);
console.log(propiedades,values);