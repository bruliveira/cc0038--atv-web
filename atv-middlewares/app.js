const express = require('express');
const { pets } = require('./pets')
const app = express();


app.use(express.json(), express.urlencoded({ extended: true }), express.static('assets'))


function validatePet(req, res, next) {
    const { name, species, age, breed, color, ownerName, contact} = req.body;

    const ageNumber = parseInt(age);

    if (!name || !species || !age || !breed || !color || !ownerName || !contact) {
        const err = new Error('Todos os campos são obrigatórios');
        err.status = 400;
        return next(err);
    }

    pets.push({
        id: pets.length + 1,
        name,
        species,
        age: ageNumber,
        breed,
        color,
        ownerName,
        contact
    });
    next();
}

app.use((req, res, next) => {
    console.log('Criando meu primeiro Middleware');
    next();
});

app.get('/', (req, res) => {
    res.send('Página inicial')
})

app.get('/pets', (req, res) => {
    res.send(pets)
})

app.post('/pets', validatePet, (req, res, next) => {
    //res.status(201).send('Pet cadastrado com sucesso!');
    res.redirect('/index.html');
});


app.use((err, req, res, next) => {    
    console.error('Erro interno do servidor:', err);
    res.status(500).send('Algo deu errado!');
});

app.listen(3000);
