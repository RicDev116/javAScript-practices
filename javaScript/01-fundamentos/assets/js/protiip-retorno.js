const crearPersona = (nombre,apellido) => ({nombre,apellido})//regresamos un objeto
//     return {
//         nombre:nombre,
//         apellido:apellido,
//     }
// }
const persona = crearPersona('Ricardo','Leyva');
console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);//ARGUMENTS VIENE POR DEFAULT EN EL CODIGO HIDDEN
};
imprimeArgumentos('Fernando',true,127,'Yes');

const imprimerArg2 = (id,...qrgs) => qrgs;//los tres puntos significan (create un arreglo con los argumentos)
const argumentos = imprimerArg2('Fernando',true,127,'Yes');
console.log(argumentos[0],argumentos[1]);
console.log(argumentos);
const [nombre,casado,edad,frase] = imprimerArg2(10,'Fernando',true,127,'Yes');

console.log({nombre,casado,edad,frase});

const {apellido} = crearPersona('Ricardo','Leyva');
const {apellido:nuevoApellido} = crearPersona('Ricardo','Leyva');//CAMBIA EL NOMBRE 
console.log({apellido,nuevoApellido});

const tony ={
    // nombre:  'Tony Stark',
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

const imprimerPropiedades = ({nombre = 'Ricardo',codeName,vivo,edad,trajes})=>{
    
    edad = edad || 0;//si trae valor lo asigna sino le da 0:

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}
imprimerPropiedades(tony);