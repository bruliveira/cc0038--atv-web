const http = require('http');

const products = [
    { id: 1, name: 'Produto 1', price: 10 },
    { id: 2, name: 'Produto 2', price: 20 },
    { id: 3, name: 'Produto 3', price: 30 }
];

const servidor = http.createServer((request, response) => {
    if (request.method === 'GET' && request.url === '/produtos') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Olá, Mundo!');
    } else if (request.method === 'POST' && request.url === '/produtos') {
        let corpoRequisicao = '';
        
        request.on('data', (chunk) => {
            corpoRequisicao += chunk.toString();
        });

        request.on('end', () => {
            console.log('Informações da requisição POST:');
            console.log(corpoRequisicao);

            response.writeHead(201, { 'Content-Type': 'text/plain' });
            response.end('Produto criado com sucesso!');
        });
    } else if (request.method === 'PUT' && request.url === '/produtos') {
        let corpoRequisicao = '';
    
        request.on('data', (chunk) => {
            corpoRequisicao += chunk.toString();
        });
        request.on('end', () => {
            console.log('Informações da requisição PUT:');
            console.log(corpoRequisicao);

            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Produto atualizado com sucesso!');
        });
    } else if (request.method === 'DELETE' && request.url === '/produtos') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Produto deletado com sucesso!');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Rota não encontrada');
    }
});


const porta = 3000;
servidor.listen(porta, () => {
    console.log(`Servidor iniciado em http://localhost:${porta}`);
});
