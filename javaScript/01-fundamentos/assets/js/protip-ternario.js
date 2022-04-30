const elMayor = (a,b) => (a>b)?a:b;

const tieneMembresia =  (miembro) => (miembro) ? 'Dos dolares' : 'Diez Dolares'

console.log(elMayor(20,15));
console.log(tieneMembresia(false));


const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Doctor Strange',
    amigo ?'Thor' : 'Loki'
];
console.log(amigosArr);