const express = require("express");
const app = express();
const port = 3030;
app.use(express.json());

let users = [
  {
    id: 1,
    name: "João da Silva",
    email: "joao@ufca.edu.br",
    age: 30,
    gender: "male",
  },
  {
    id: 2,
    name: "MAria da Silva",
    email: "maria@ufca.edu.br",
    age: 30,
    gender: "male",
  },
];

const getAllUsers = () => users;

const createUser = (newUser) => users.push(newUser);

const updateUserById = (userId, newUser) => {
  const user = users.find((user) => user.id === userId);
  if (user) {
    Object.assign(user, newUser);
  }
};

const deleteUserById = (userId) => {
  users = users.filter((user) => user.id !== userId);
};


app.get("/", (req, res) => {
  // Envie uma página HTML como resposta
  res.send("<html><body><h1>Página Inicial - Bruna</h1></body></html>");
});

// Rota GET para CRUD de usuários (ainda sem implementação)
app.get("/users", (req, res) => {
  //res.send('Lista de Usuários');
  res.send(getAllUsers());
});


// Implemente outras rotas para criar, atualizar e excluir usuários
app.post("/users", (req, res) => {
  const usuario = req.body;
  createUser(usuario);
  res.status(201).send(usuario);
});

app.put("/users/:id", (req, res) => {
  const idUsuario = parseInt(req.params.id);
  const usuario = req.body;
  updateUserById(idUsuario, usuario);
  res.send(usuario);
});

app.delete("/users/:id", (req, res) => {
  const idUsuario = parseInt(req.params.id);
  deleteUserById(idUsuario);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
