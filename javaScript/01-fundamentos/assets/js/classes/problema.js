const fher = {
    nombre:'Ricardo',
    edad:30,
    imprimir(){
        console.log(`Nombre: ${this.nombre}`)
    }
}

const pedro = {
    nombre:'Pedro',
    edad:15 
}

fher.imprimir();

function Persona(nombre, edad =10){
    console.log(`Se eejecuto esta linea`);
    console.log(this.nombre);
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nommbre: ${this.nombre} Edad: ${this.edad}`);
    }
}

const mmaria =  new Persona('Maria',18);
const melisa = new Persona('Melissa',45);
console.log(mmaria);
melisa.imprimir();



//////////////
class PersonMaterial{
    nombre;
    codigo;
    frase;
    constructor(nombre,codigo,frase){
        if(!nombre) throw Error('Nombre es requerido') 
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        console.log('Hola!');
    }
}

const spiderman = new PersonMaterial();
console.log(spiderman);