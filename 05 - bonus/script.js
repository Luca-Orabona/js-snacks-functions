/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto(string) {
    const date = new Date()
    const dateHours = date.getHours();
    console.log(dateHours);

    let salutoString = `ciao ${string}`;

    if (dateHours >= 7 && dateHours <= 13) {
        salutoString = `Buongiorno ${string}`;

    } else if (dateHours >= 13 && dateHours <= 17) {
        salutoString = `Buon pomeriggio ${string}`;

    } else {
        salutoString = `Buonasera ${string}`;
    }


    return salutoString
}

// Invoca la funzione qui e stampa il risultato in console
const result = saluto(name);
console.log("Saluto:", "''''", result, "''''");



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.