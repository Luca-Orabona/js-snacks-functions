/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function saluto(string) {

    let salutoString = `ciao ${string}`;

    return salutoString
}

// Invoca la funzione qui e stampa il risultato in console
const result = saluto(name);
console.log("Saluto:", "''''", result, "''''");


//Risultato atteso se si passa 'Mario': // ciao Mario