class Singleton{

    static instance;

    nombre = '';

    constructor(nombre = ''){

        const a = undefined;

        console.log(a);//undefined
        console.log(!a);//true
        console.log(!!a);//false

        if(!!Singleton.instance){
            return Singleton.instance;
        }

        Singleton.instance = this
        this.nombre = nombre;

        //siempre retorna this
        //return this;
    }
}


intance = new Singleton("Iron man");
intance2 = new Singleton("Spiderman");
intance3 = new Singleton("Blackpanter");

console.log(`El nombre de la intancia es ${intance.nombre}`);
console.log(`El nombre de la intancia es ${intance2.nombre}`);
console.log(`El nombre de la intancia es ${intance3.nombre}`);