// creo  una lista di email che potranno essere accettate per accedere
var eMailConsentite = ["yhyddojel-8076@yopmail.com", "rossitysser-7172@yopmail.com", "lyllozattenn-7734@yopmail.com", "jossevege-2985@yopmail.com"];

// creo una variabile che funge da bandierina per uscire dal ciclo
var verifica = false;

// avvio un ciclo per il controllo della mail che si interromperà quando l'accesso sarà consentito
while (verifica == false) {
    // chiedo all'utente di inserire la sua email
    var eMailUtente = prompt("inserire l'email");
    // controllo se l'email inserita dall'utente è presente nella lista
    for (i = 0; i < eMailConsentite.length; i++) {
        if (eMailUtente == eMailConsentite[i]) {
            verifica = true;
        }
    }
    // se l'email è presente nella lista faccio accedere l'utente altrimenti nego l'accesso e ripeto il ciclo chiedendo nuovamente all'utente di inserire un'email
    if (verifica == true) {
        alert("accesso consentito");
    } else {
        alert("accesso negato")
    }
}


// VARIANTE CON IL METODO .INCLUDES
// // controllo se l'email inserita dall'utente è presente nella lista
// if (eMailConsentite.includes(eMailUtente)) {
//     alert("accesso consentito");
// } else {
//     alert("la tua email non risulta nella lista, accesso negato");
//     location.reload();
// }