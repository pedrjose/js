// Reverse a string with your name
// Ex5

let nameUser = 'Pedro'; let aux = '';
for (let i = 1; i <= nameUser.length; i++) {
    aux += nameUser[nameUser.length-i];
}
nameUser = aux;
console.log(nameUser);