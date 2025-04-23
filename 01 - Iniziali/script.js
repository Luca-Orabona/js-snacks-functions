/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function primaLettera(array) {

    const result = [];
    for (let i = 0; i < array.length; i++) {

        result.push(array[i][0]);

    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console
const result = primaLettera(names);
console.log(result);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]