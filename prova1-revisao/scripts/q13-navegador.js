// Escreva um programa em JavaScript  que mostre o nome do navegador utilizado pelo usuário. (Dica: Usar objeto Navigator )

const browserName = navigator.userAgent;

console.log(browserName)

// Adicionado na tabela
document.getElementById("browser-atual").innerText = browserName;