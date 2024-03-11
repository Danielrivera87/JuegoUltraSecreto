let NumeroSecreto = 0;
let intentos = 1;
let ListaNumerosSorteados = [];
let NumeroMaximo = 3;

document.getElementById("reiniciar").setAttribute("disabled", "true");
AsignarTextoElemenot("h1", "Juego del Numero Secreto!");
AsignarTextoElemenot("p", "Indica un numero del 1 al 10");
console.log(NumeroSecreto);

function GenerarNumeroSecreto() {
  let NumeroGenerado = Math.floor(Math.random() * NumeroMaximo) + 1;
  console.log(NumeroGenerado);
  console.log(ListaNumerosSorteados);

  if (ListaNumerosSorteados.length == NumeroMaximo){
    AsignarTextoElemenot('p', 'Ya has sorteado todos los numeros');
  }
  else{
    if (ListaNumerosSorteados.includes(NumeroGenerado)) {
      return GenerarNumeroSecreto();
    } else {
      ListaNumerosSorteados.push(NumeroGenerado);
      return NumeroGenerado;
    }
  }


  
}

function AsignarTextoElemenot(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function LimpiarCaja() {
  document.getElementById("NumeroDelUsuario").value = "";
}

function VerificarIntento() {
  console.log(NumeroSecreto);

  let numeroDeUsuario = parseInt(
    document.getElementById("NumeroDelUsuario").value
  );
  if (numeroDeUsuario === NumeroSecreto) {
    AsignarTextoElemenot("p", `Acertaste el numero en ${intentos} intentos`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (numeroDeUsuario > NumeroSecreto) {
    AsignarTextoElemenot("p", "El numero es menor");
    LimpiarCaja();
  } else {
    AsignarTextoElemenot("p", "El numero es mayor");
    LimpiarCaja();
  }

  intentos++;

  return;
}

function CondicionesIniciales() {
  AsignarTextoElemenot("h1", "Juego del Numero Secreto!");
  AsignarTextoElemenot("p", `Indica un numero del 1 al ${NumeroMaximo}`);
  NumeroSecreto = GenerarNumeroSecreto();
  intentos = 1;
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

function ReiniciarJuegos() {
  LimpiarCaja();
  CondicionesIniciales();
}
