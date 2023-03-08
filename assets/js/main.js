/*
Decrizione passaggi:
    - Chiedi all'utente il suo nome,
    - poi chiedi il suo cognome,
    - poi chiedi il suo colore preferito
    - Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
*/
const suggestedPassword = document.getElementById("suggested-password");
// V2 with form
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    const userName = document.getElementById("user-name").value;
    const userSurname = document.getElementById("user-surname").value;
    const userColor = document.getElementById("user-color").value;

    suggestedPassword.innerHTML += userName + userSurname + userColor + "23";
});

//const userName = prompt("What's your name?");
//const userSurname = prompt("What's your surname?");
//const userColor = prompt("What's your favorite color?");

//suggestedPassword.innerHTML += userName + userSurname + userColor + "23";