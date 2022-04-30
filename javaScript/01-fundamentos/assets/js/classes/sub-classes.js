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





class Heroe extends Persona{

    clan = 'Sin clan';

    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);
        this.clan = 'Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} de ${this.clan}`);
        super.quienSoy();
    }
}


const spiderman = new Heroe('Peter Parker','Spiderman','Soy tu amigable vecino el hombre araña');

spiderman.quienSoy();

console.log(spiderman);