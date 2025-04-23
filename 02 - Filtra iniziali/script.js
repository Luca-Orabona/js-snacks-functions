/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const letteraIniziale = "a";

// Dichiara la funzione qui.
function nomiLetteraIniziale(array, letteraIniziale) {

    const namesLetteraIniziale = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i][0].toUpperCase() === letteraIniziale.toUpperCase()) {
            namesLetteraIniziale.push(array[i]);
        }
    }
    // console.log(namesLetteraIniziale);
    return namesLetteraIniziale;
}


// Invoca la funzione qui e stampa il risultato in console
const result = nomiLetteraIniziale(names, letteraIniziale);
console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]