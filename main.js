
//     JSnack 1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

 /* let number1 = Number(prompt("Insert a number"));
 let number2 = Number(prompt("Insert another number"));

 const myFunction = (number1,number2) => {
     if(number1>number2){
         return number1
     }else{
         return number2
     }
 }
console.log(myFunction(number1,number2)); */


// JSnack 2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.


/* let parola1 = (prompt("Insert a type "));
let parola2 = (prompt("Insert another type"));

const myFunction = (word1,word2) => {
    if(word1.length<word2.length){
        return `${word1} ${word2}`
    }else{
        return word2 +" "+ word1
    }
}
console.log(myFunction(parola1,parola2)); */

// JSnack 3
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.


//FOR
/* const somma = (x) =>{
    let number;
    let sum=0;
    for(let i=0; i<x; i++){
       number = Number(prompt("insert a number"));
       sum += number
    }
    return sum
}
console.log(somma(5))

//WHILE
const somma2 = (y) =>{
let j=0;
let sum1=0;
while(j<y){
    number = Number(prompt("insert a number"));
    sum1 += number
    j++
}
return sum1
}
console.log(somma2(5)) */

// JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

/* const list = ["Baldassarre","Di Cataldi","Scarpati","Trazzi","Gianguzzi"];

const myFunction = (name)  => {
    name = prompt("Surname?");
    if(list.includes(name)){
        return "Entra"
    }else{
        return "Vai via barbunn!!!"
    }
}
console.log(myFunction(name)); */

// JSnack 5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

/* let oddNumber = [];
const myFunction = (x) => {
    let i=0;
    while( i<x ){
        let userNumber = Number(prompt("Type a number"));
        if(userNumber%2 !== 0){
           oddNumber.push(userNumber)
        }
        i++
    }
    return oddNumber
}
console.log(myFunction(6)); */

// JSnack 6
// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

const myFunction = (potenza) => {
    let userNumber = Number(prompt("Type a number"));
    let print = 0;
    for(let i=1; i <userNumber; i++){
        print = i**potenza
        console.log(print);
    }
    return print
}
console.log(myFunction(3));
