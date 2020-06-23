var risultato = document.getElementById("result");

//Richiesta email
var emailUtente = prompt("Inserisci la tua E-Mail");
console.log(emailUtente);

//Elenco email
var lista = ["nomeutente@gmail.com", "nomeutente@libero.it", "nomeutente@yahoo.com", "nomeutente@email.it"]
console.log(lista)

//Controllo email
for (var i = 0; i < lista.length; i++) {

  if (lista[i] == emailUtente) {
    risultato.innerHTML = "La tua e-mail può accedere.";
    break;
  }
  else {
    risultato.innerHTML = "La tua e-mail non può accedere.";
  }

}
