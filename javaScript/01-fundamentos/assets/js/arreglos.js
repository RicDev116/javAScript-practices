//let arr = [];
let arr = new Array(10);

let videoJuegos = ['Mario3','Megaman','Chrono Trigger','Method'];

console.log({videoJuegos});
console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Ricardo',
    1+2,
    function(){},
    ()=>{},
    {a:1},
    ['X','Megaman','Zero','Dr. Light'],
]

console.log(arregloCosas[7][3]);
console.log('Largo:',videoJuegos.length);

videoJuegos.forEach((elemento,index,arr)=>{
    console.log({elemento,index,arr});
});

let OldLength = videoJuegos.length;
let nuevaLongitus = videoJuegos.push('F-Zero');
console.log(videoJuegos);

if(OldLength === nuevaLongitus){
    console.log('Longitud de videojuegos ha cambiado');
}else{
    console.log('Longitud igual');
};

nuevaLongitus = videoJuegos.unshift('GOW');
console.log(nuevaLongitus);


let juegoBorrado = videoJuegos.pop()
console.log({juegoBorrado,videoJuegos});

let pos = 1;
let juegosBorrados = videoJuegos.splice(pos,2);
console.log({juegosBorrados});

let indexMexgaman = videoJuegos.indexOf('Method');
console.log(indexMexgaman);

