// Escreva um programa em JavaScript para exibir o dia e a hora atuais no seguinte formato: 
// Horário:  6 PM : 40m : 28s

const dataAtual = new Date(); //Sun Feb 18 2024 16:18:26 GMT-0300

// Pega a data de acordo com o formato que está utilizando
const dataFormatada = dataAtual.toLocaleDateString()

const diaAtual = dataAtual.getDate()
const mesAtual = dataAtual.getMonth() + 1
const anoAtual = dataAtual.getFullYear()

const horaDia = dataAtual.getHours() % 12 || 12 
const horaPeriodo = horaDia >= 12 ? "PM" : "AM";
const minutosDia = dataAtual.getMinutes()
const segundoDia = dataAtual.getSeconds()


// Formato da Data
const dataAtualFormatada = `${diaAtual}/${mesAtual}/${anoAtual}`
// Formato da Hora
const horaFormatada = `${horaDia} ${horaPeriodo} : ${minutosDia}m : ${segundoDia}s`;

const dataHoraFinal = `Data: ${dataAtualFormatada}\nHorário: ${horaFormatada}`

alert(dataHoraFinal)

export { dataHoraFinal };