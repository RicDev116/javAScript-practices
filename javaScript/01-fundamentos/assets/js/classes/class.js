


class Persona{

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + " instancia(s)";
    }

    static mensaje(){
        console.log("Un mensaje");   
    }
    

    nombre = "";
    codigo = "";
    frase = "";
    _comida = "";

    constructor(nombre = "NA",codigo = "NA",frase = "NA"){

        if(!nombre) throw Error()

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++;
    }

    set comida(comida){
        this._comida = comida.toUpperCase()
    }

    get comida(){
        return `Es ${this._comida}`
    }


    quienSoy(){
        console.log(`Soy ${this.nombre}`);
    }

    miFrase(){
        // this.quienSoy();
        console.log(`Digo ${this.frase}`);
    }
}





const spiderman = new Persona("Ricardo","20","hola :v");

spiderman.quienSoy();
spiderman.comida = "Hamburguesas y papas jejeje";
spiderman.nemesis = "Duende verde";

console.log(spiderman);
console.log(spiderman.comida);

// Persona._conteo = 1;

console.log('Conteo stático:',Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = "Propiedad externa";
console.log(Persona.propiedadExterna);




