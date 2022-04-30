// var fps = 10;
// var xEscenario = 0;

// function principal(){
	// mueveEscenario();
// }
// function mueveEscenario(){
	// xEscenario++;
	// console.log(xEscenario);
// }

// function atacar(){
	// console.log('Haz atacado!');
// }
// //SE EJECUTA A CADA MOMENTO LE PASAS PA FUNCION Y EL TIEMPO POR SSEGUNDO
// setInterval(principal,1000/fps)	

// document.addEventListener('keydown',function(tecla){
	// console.log(tecla.keyCode)
	// if(tecla.keyCode == 32){
		// console.log('Espacio')
	// }
	
	// if(tecla.keyCode == 32){
		// console.log('Espacio')
	// }
// });

// var configTeclado = { prevent_repeat : true};
// var eventoTeclado = new window.keypress.Listener(this,configTeclado);
// var miCanvas;

// function pulsaA(){
   // console.log('Has pulsado a');
// }

// function pulsaAB(){
   // console.log('Has pulsado ab');
// }

// function pulsaESPECIAL(){
   // console.log('Poder especial!!');
// }  
// eventoTeclado.simple_combo('a',pulsaA);
// eventoTeclado.simple_combo('a b',pulsaAB);
// eventoTeclado.simple_combo('up down',pulsaESPECIAL);

// function inicializar(){
	// miCanvas = document.getElementById('canvas');
	// miCanvas.addEventListener('mousedown',clickRaton,false);
	// miCanvas.addEventListener('mousemove',posicionRaton,false);
// }

// function clickRaton(e){
	// console.log('Se pulso raton!');
// }

// function posicionRaton(e){
	// var x = e.pageX;
	// var y = e.pageY;
	// console.log('x:'+ x +' - y:' + y)
// }

var canvas;
var ctx;
var FPS = 50;

var imgRex;

function inicializar(){
	
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	
	//cargamos imagen 
	imgRex = new Image();
	imgRex.src = 'img/rex2.png'
	
	setInterval(function(){
		principal();
	},1000/FPS)
	
}

function borraCanvas(){
	canvas.width = 500;
	canvas.height = 400;
}

//===================PROTAGONISTA===================
var protagonista = function(x,y){
	this.x = x
	this.y = y;
	this.velocidad = 3;
	this.dibuja = function(){
		ctx.drawImage(imgRex,this.x,this.y,50,50);
	}
	
	this.arriba = function(){
		this.y -= this.velocidad;
	}
	this.abajo = function(){
		this.y += this.velocidad;
	}
	this.izquierda = function(){
		this.x -= this.velocidad;
	}
	
	this.derecha = function(){
		this.x += this.velocidad;
	}
	
	this.texto = function(){
		ctx.font = '30px impact';
		ctx.fillStyle = '#555555';
		ctx.fillText('X:'+this.x,100,100)
	}
}

var prota = new protagonista(200,200);

document.addEventListener('keydown',function(tecla){
	//ARRIBA
	if(tecla.keyCode == 38){
		prota.arriba();
	}
	//ABAJO
	if(tecla.keyCode == 40){
		prota.abajo();
	}
	//IZQUIERDA
	if(tecla.keyCode == 37){
		prota.izquierda();
	}
	//DERECHA
	if(tecla.keyCode == 39){
		prota.derecha();
	}
})

//=================PERSONAJE=========================
var pensonaje = function(x,y){
	this.x = x;
	this.y = y;
	this.dibuja = function(){
		//color
		ctx.fillStyle = '#FF0000';
		//dibuja
		ctx.fillRect(this.x,this.y,50,50);
	}
	
	this.mueve = function(velocidad){
		if(this.derecha == true){
			if(this.x < 400)
			  this.x+= velocidad;
		    else{
			  this.derecha = false;
		    }
		}else{
			if(this.x > 50)
			  this.x-= velocidad;
		    else{
			  this.derecha = true;
		    }
		}
	}
	
}
var per1 = new pensonaje(10,100);
var per2 = new pensonaje(10,200);
var per3 = new pensonaje(10,350);

//===========MAIN====================
function principal(){
	borraCanvas();
	per1.dibuja();
	per2.dibuja();
	per3.dibuja();
	
	per1.mueve(2);
	per2.mueve(1);
	per3.mueve(5);
	
	prota.dibuja();
	prota.texto();
}
