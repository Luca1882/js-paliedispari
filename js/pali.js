//Inizializzo la funzione per riconoscere una parola palindroma
function isPalindroma (word){
    //Pulisco la parola da eventuali maiuscole così da avere una parla uniforme
        const cleanWord = word.toLowerCase();
    //Divido, rigiro, e riunisco la parola
        const wordPalindroma = cleanWord.split("").reverse().join("");
    //Confronto il risultato 
        return wordPalindroma === cleanWord;
}      
//Faccio inserire la parola
const inputWordUser = prompt("Si prega di inserire una parola, grazie: ");
//Metto a condizione la funzione 
if(isPalindroma(inputWordUser)){
    console.log("La parola è palindroma");
} else {
    console.log("Non è palindroma");
}