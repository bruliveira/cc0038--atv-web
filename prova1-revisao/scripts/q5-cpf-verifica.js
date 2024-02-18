// Crie um programa em JavaScript que verifica qual a região fiscal de um dado CPF e apresente na tela o CPF e sua região fiscal.

function regiaoFiscal(cpf) {
    const digitoNono = parseInt(cpf.charAt(8));

    let regiaoFiscal;
    switch (digitoNono) {
        case 0:
            regiaoFiscal = "10ª Região Fiscal (RS)";
            break;
        case 1:
            regiaoFiscal = "1ª Região Fiscal (DF, GO, MT, MS, TO)";
            break;
        case 2:
            regiaoFiscal = "2ª Região Fiscal (AC, AP, AM, PA, RO, RR)";
            break;
        case 3:
            regiaoFiscal = "3ª Região Fiscal (CE, MA, PI)";
            break;
        case 4:
            regiaoFiscal = "4ª Região Fiscal (AL, PB, PE, RN)";
            break;
        case 5:
            regiaoFiscal = "5ª Região Fiscal (BA, SE)";
            break;
        case 6:
            regiaoFiscal = "6ª Região Fiscal (MG)";
            break;
        case 7:
            regiaoFiscal = "7ª Região Fiscal (ES, RJ)";
            break;
        case 8:
            regiaoFiscal = "8ª Região Fiscal (SP)";
            break;
        case 9:
            regiaoFiscal = "9ª Região Fiscal (PR, SC)";
            break;
        default:
            regiaoFiscal = "Error! Região não identificada";
            break;
    }
    return regiaoFiscal;
}

function validarCPF(cpf) {
    return cpf.length == 11 ? true : false;
}

const cpf = "06586585309"; 

if (validarCPF(cpf)) {
    const regiao = regiaoFiscal(cpf);
    alert(`O CPF ${cpf} pertence à ${regiao}`);
} else {
    alert("CPF inválido");
}
