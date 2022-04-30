 const dia  = 0;
 const horaActual = 10;

 let horaApertura;
 let mensaje;

 
 horaApertura = ([0,6].includes(dia))?9:11;
 mensaje = (horaApertura == 9)
 ?`Hoy es fin de semana y abrimos a las ${horaApertura}`
 :`Hoy no es fin de semana y abrimos a las ${horaApertura}`
 console.log(mensaje);
  