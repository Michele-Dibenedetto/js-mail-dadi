// creo  una lista di email che potranno essere accettate per accedere
var eMailConsentite = ["yhyddojel-8076@yopmail.com", "rossitysser-7172@yopmail.com", "lyllozattenn-7734@yopmail.com", "jossevege-2985@yopmail.com"];
// chiedo all'utente di inserire la sua email
var eMailUtente = prompt("inserire l'email");
console.log(eMailUtente);

// controllo se l'email inserita dall'utente è presente nella lista
if (eMailConsentite.includes(eMailUtente)) {
    alert("accesso consentito");
} else {
    alert("la tua email non risulta nella lista, accesso negato");
    location.reload();
}
