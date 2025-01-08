//Funzione Numero casuale
function numeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
};

//Funzione isPari
function isPari(somma) {
    return somma % 2 === 0 ? "PARI" : "DISPARI";
}

//Funzione Inizio Partita
function playTheGame() {
    //Scelta "Pari o Dispari" dei giocatori
    let sceltaGiocatore = prompt("Giocatore Uno scegli pari o dispari: ").toUpperCase();


    //Scelta del numero
    let numGiocatore = parseInt(prompt("Giocatore Uno scegli un numero da 1 a 5: "));
    let numCom = numeroCasuale();

    //Somma dei numeri per determinare il vincitore e confronto
    let somma = numGiocatore + numCom;
    let verifica = isPari(somma);

    //Risultati
    console.log(`La somma è: ${somma}`);
    console.log(`Il risultato è: ${verifica}`);

    // Determina chi vince
    if (sceltaGiocatore === verifica) {
        console.log("Il giocatore Uno vince la partita");
    } else {
        console.log("Il computer vince la partita");
    }


}

//Inizio gioco
playTheGame();