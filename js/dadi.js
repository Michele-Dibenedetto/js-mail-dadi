// genero un numero casuale per il giocatore e faccio tirare il dado
var giocatore = Math.floor(Math.random() * 6) +1;
alert("giocatore tira il dado");
alert("il numero del giocatore è di:" + giocatore);

// genero un numero casuale per il computer e faccio tirare il dado
var computer = Math.floor(Math.random() * 6) +1;
alert("il computer tira il dado");
alert("il numero del computer è di:" + computer);

// confroto i numeri usciti e dichiaro il vincitore
if (giocatore > computer) {
    alert("il vincitore è: GIOCATORE");
} else if (giocatore < computer) {
    alert("il vincitore è: COMPUTER")
} else {
    alert("pareggio");
}
