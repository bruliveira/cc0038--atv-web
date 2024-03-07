// CRUD 

const http = require('http');

const products = [
    { id: 1, name: 'Produto 1', price: 10 },
    { id: 2, name: 'Produto 2', price: 20 },
    { id: 3, name: 'Produto 3', price: 30 }
];

const servidor = http.createServer((request, response) => {
    const { method, url } = request;

    // Lista todos, ou passando o id, mostra o especifico
    if (method === 'GET' && url === '/produtos') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(products));
    }
    else if (method === 'GET' && url.startsWith('/produtos/')) {
        const id = parseInt(url.split('/')[2]);
        const product = products.find(prod => prod.id === id);

        if (product) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(product));
        } else {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('Produto não encontrado');
        }
    }
    // Criar um produto
    else if (request.method === 'POST' && request.url === '/produtos') {
        let corpoRequisicao = '';
        const querystring = require('querystring');
        
        request.on('data', (chunk) => {
            corpoRequisicao += chunk.toString();
        });

        request.on('end', () => {
            const parsedData = querystring.parse(corpoRequisicao);
            const novoProduto = {
                nome: parsedData.nome,
                preco: parsedData.preco,
                descricao: parsedData.descricao,
                categoria: parsedData.categoria
            };
            products.push(novoProduto);
        
            response.writeHead(201, { 'Content-Type': 'text/plain' });
            response.end('Produto criado com sucesso!');
        });
        
    }
    else if (method === 'PUT' && url.startsWith('/produtos/')) {
        const id = parseInt(url.split('/')[2]);
        let corpoRequisicao = '';

        request.on('data', (chunk) => {
            corpoRequisicao += chunk.toString();
        });
        request.on('end', () => {
            const produtoAtualizado = JSON.parse(corpoRequisicao);
            const index = products.findIndex(prod => prod.id === id);

            if (index !== -1) {
                products[index] = produtoAtualizado;
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.end('Produto atualizado com sucesso!');
            } else {
                response.writeHead(404, { 'Content-Type': 'text/plain' });
                response.end('Produto não encontrado');
            }
        });
    } 
    // Excluir um produto existente
    else if (method === 'DELETE' && url.startsWith('/produtos/')) {
        const id = parseInt(url.split('/')[2]);
        const index = products.findIndex(prod => prod.id === id);

        if (index !== -1) {
            products.splice(index, 1);
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Produto deletado com sucesso!');
        } else {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('Produto não encontrado');
        }
    } 
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Rota não encontrada');
    }
});


const porta = 3000;
servidor.listen(porta, () => {
    console.log(`Servidor iniciado em http://localhost:${porta}`);
});
