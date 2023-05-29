/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
   Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino. */

console.log
(
    "BOOL      - Variabile Booleana, può assumere solamente i valori \"True\" (o 0) e \"False\" (o 1). \n"
  + "            Serve ad indicare se un valore è vero o falso e per fare operazioni logiche.\n"

  + "STRING    - Variabile stringa, contiene una sequenza do caratteri alfanumerici o caratteri speciali.\n"
  + "            Serve per memorizzare informazioni su cui non verranno effettuati dei calcoli matematici.\n"

  + "NUMBER    - Variabile numrica, contiene un numero.\n"
  + "            Serve per memorizzare numeri su cui andranno effettuati dei calcoli matematici.\n"

  + "BIGINT    - Variabile numrica, contiene un numero troppo grande per essere rappresentato con un NUMBER.\n"
  + "            Serve per memorizzare numeri su cui andranno effettuati dei calcoli matematici.\n"  

  + "UNDEFINED - Variabile indefinita, questo valore viene assegnato alle variabili appena inizializzate.\n"
  + "            Indica l'assenza di un valore assegnato.\n"

  + "NULL      - Variabile nulla, non contiene nessuna informazione.\n"
  + "            Null indica l'assenza di un valore, un valore esplicitamente vuoto.\n"
)


/* ESERCIZIO 2
   Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa. */

let name0 = "Alessio" //L'ho chiamato name0 perché il nome "name" è considerato deprecato
console.log("Nome:", name0)


/* ESERCIZIO 3
   Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20. */

const sum = 12 + 20
console.log("Somma:", sum)


/* ESERCIZIO 4
   Crea una variable di nome "x" e assegna ad essa il numero 12. */

const x = 12;


/* ESERCIZIO 5
   Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
   Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const. */

name0 = "Portacci"
console.log("Cognome:", name0)

//x = 5  // <== Da errore perché x è una costante, rompe tutto quello che si trova sotto di lui


/* ESERCIZIO 6
   Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12). */

const subtraction = 4 - x
console.log("Sottrazione:", subtraction)


/* ESERCIZIO 7
   Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
   Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
   EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!). */

const name1 = "john"
const name2 = "John"

if (name1 === name2)
  console.log("I due nomi", name1, "e", name2, "sono uguali!")
else
  console.log("I due nomi", name1, "e", name2, "sono diversi... TOO BAD!")

if (name1.toLowerCase() === name2.toLowerCase())
  console.log("I due nomi", name1.toLowerCase(), "e", name2.toLowerCase(), "sono uguali!")
else
  console.log("I due nomi", name1.toLowerCase(), "e", name2.toLowerCase(), "sono diversi... TOO BAD!")