//PATRON MODULO:
(()=>{
  'use strict' // EVALUA DE FORMA ESTRICTA
  // const personajes = ['Ana','Mercy','Mei'];
  // console.log(personajes);

  let deck = [];
  const tipos = ['C','D','H','S'],
        especiales = ['A','J','Q','K'];
  
  let puntosJugadores = [];

  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevoJuego = document.querySelector('#btnNuevo');

  const puntosHTML = document.querySelectorAll('small'),
        divCartasJugador = document.querySelectorAll('divCartas');
        // divCartasJugador = document.querySelector('#jugador-cartas'),
        // divCartasComputadora = document.querySelector('#computadora-cartas');

  const inciailizarJuego = (numJugadores = 1) => {
    deck = crearDeck();
    for(let i = 0;  i< numJugadores ; i++){
      puntosJugadores.push(0);
    }
  }

  const crearDeck = () => { 
    deck = [];
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
          deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let especial of especiales){
          deck.push(especial + tipo);
        }
    }
    return _.shuffle(deck);
  }

  inciailizarJuego();

  //pide carta
  const pedirCarta = () => {
    if(deck.length === 0){
      throw 'No hay cartas en el deck';
    }
    return deck.pop();
  }
  // deck = [];
  //pedirCarta();

  const valorCartaR = (carta) => isNaN(carta.substring(0,carta.length-1))
  ?(carta.substring(0,carta.length-1) === 'A')?11:10
  :carta.substring(0,carta.length-1) * 1;

  //turno = 0 primer jugarod y ultimo la computadora
  const acumularPuntos = (carta,turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] +  valorCartaR(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  }

  // const valorCarta = (carta) => {

  //   const valor = carta.substring(0,carta.length -1);
  //   let puntos = 0;

  //   if(isNaN(valor)){
  //     puntos = (valor === 'A'?11:10)
  //   }else{
  //     puntos = valor * 1;
  //   }
  // }

  //valorCarta('9D');
  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
     imgCarta.src = `assets/cartas/${carta}.png`;
     imgCarta.classList.add('carta');
     divCartasComputadora.append(imgCarta);
  }
  //turnoComputadora
  const turnoComputadora = (puntosMinimos) => {
    do{

      const carta = pedirCarta();
      acumularPuntos(carta,puntosJugadores.length-1);

      
      if(puntosMinimos > 21 ){
        break;
      }
    }while((puntosComputadora<puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
      if((puntosMinimos > 21) || (puntosMinimos < 21 && puntosComputadora <= 21 && puntosComputadora > puntosMinimos)){
        alert('La computadora ha ganado!');
      }else if(puntosMinimos == puntosComputadora){
        alert('Han quedado empate!');
      }else if((puntosMinimos == 21) || (puntosMinimos <= 21 && puntosComputadora > 21)){
        alert('Has Ganado!');
      }
    }, 100);
    
  }

  btnPedir.addEventListener('click',(turno) => {

    const carta = pedirCarta();
    const puntosJugador =  acumularPuntos(carta,0);

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador[turno].append(imgCarta);

    if(puntosJugador > 21){
      console.warn('Lo siento mucho , perdiste');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }else if(puntosJugador == 21){
      console.warn('21 Genial');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener('click',() =>{
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador);
  })

  btnNuevoJuego.addEventListener('click',() =>{
    console.clear();
    inciailizarJuego();
    // deck = [];
    // deck = crearDeck();
    // btnDetener.disabled = false;
    // btnPedir.disabled = false;
    // puntosJugador = 0;
    // puntosComputadora = 0;
    // puntosHTML[0].innerText = 0;
    // puntosHTML[1].innerText = 0;
    // divCartasComputadora.innerHTML = '';
    // divCartasJugador.innerHTML = '';
  })
})();





