/*
Decrizione passaggi:
    - Chiedi all'utente il suo nome,
    - poi chiedi il suo cognome,
    - poi chiedi il suo colore preferito
    - Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
*/
const suggestedPassword = document.getElementById("suggested-password");

const userName = prompt("What's your name?");
const userSurname = prompt("What's your surname?");
const userColor = prompt("What's your favorite color?");

suggestedPassword.innerHTML += userName + userSurname + userColor + "23";