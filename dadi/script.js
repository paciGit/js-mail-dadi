var risultato = document.getElementById("result");
var puntPlayer1 = document.getElementById("player1");
var puntPlayer2 = document.getElementById("player2");
var btn = document.getElementById("btn");
var player1, player2;

btn.addEventListener("click", function () {

  //Player1 lancia il dado
  player1 = Math.floor((Math.random() * 6 + 1));
  puntPlayer1.innerHTML = "Punteggio Giocatore 1: " + player1;
  console.log(player1);

  //Player2 lancia il dado
  player2 = Math.floor((Math.random() * 6) + 1);
  puntPlayer2.innerHTML = "Punteggio Giocatore 2: " + player2;
  console.log(player2);

  //Risultato finale
  if (player1 == player2) {
    risultato.innerHTML = "Pareggio.";
  } else if (player1 > player2) {
    risultato.innerHTML = "Il primo giocatore ha vinto!";
  } else {
    risultato.innerHTML = "Il secondo giocatore ha vinto!";
  }

});
