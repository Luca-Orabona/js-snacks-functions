/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function numVocali(string) {
    const vocali = "aeiouAEIOU";
    conteggioVocali = 0;

    for (let i = 0; i < string.length; i++) {
        // for (let j = 0; j < vocali.length; j++){
        //     if (string[i] === vocali[j]) {
        //         conteggioVocali++

        //     }

        // }

        if (vocali.includes(string[i])) {
            conteggioVocali++
        }
    }

    return conteggioVocali
}

// Invoca la funzione qui e stampa il risultato in console
const result = numVocali(word);
console.log("Il numero di vocali è:", result);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)