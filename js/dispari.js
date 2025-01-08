//Funzione Numero casuale
function numeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

//Funzione isPari
function isPari(somma) {
    return somma % 2 === 0 ? "pari" : "dispari";
}

//Funzione per determinare il vincitore
function vincitore(giocatoreUno, giocatoreDue, risultato, sceltaUno, sceltaDue) {
    if (risultato === "pari" && sceltaUno === "PARI") {
        return "Il Giocatore Uno ha vinto la partita";
    } else if (risultato === "dispari" && sceltaUno === "DISPARI") {
        return "Il Giocatore Uno ha vinto la partita";
    } else {
        return "Il Giocatore Due ha vinto la partita";
    }
};

//Funzione Inizio Partita
function playTheGame() {
    //Scelta "Pari o Dispari" dei giocatori
    let giocatoreUno = prompt("Giocatore Uno scegli pari o dispari: ").toUpperCase();
    let giocatoreDue = prompt("Giocatore Due scegli pari o dispari: ").toUpperCase();

    //Scelta del numero
    let numGiocatoreUno = parseInt(prompt("Giocatore Uno scegli un numero da 1 a 5: "));
    let numGiocatoreDue = parseInt(prompt("Giocatore Due scegli un numero da 1 a 5: "));

    //Somma dei numeri per determinare il vincitore e confronto
    let somma = numGiocatoreUno + numGiocatoreDue;
    let verifica = isPari(somma);

    // Determina chi vince
    let resVincitore = vincitore(giocatoreUno, giocatoreDue, verifica, giocatoreUno, giocatoreDue);

    //Risultati
    console.log(`La somma è: ${somma}`);
    console.log(`Il risultato è: ${verifica}`);
    console.log(resVincitore);
}

//Inizio gioco
playTheGame();