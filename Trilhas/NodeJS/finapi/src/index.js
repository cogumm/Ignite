const { response } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

/**
 * Instâncianado a aplicação utilizando o express.
 */
const app = express();

/**
 * Utilizando o express para converter o JSON em objeto do JS/TS.
 */
app.use(express.json());

// Criando um array para armazenar os usuários e contas.
const customers = [];

/**
 * Cadsatro de conta.
 *
 * id - uuid
 * name - string
 * cpf - string
 * statement - object []
 */
app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  // Gerando o id.
  const id = uuidv4();

  customers.push({
    id,
    name,
    cpf,
    statement: [],
  });

  return res.status(201).send();
});

app.listen(3001, () => {
  console.log("Servidor backend inicializado com sucesso na porta 3001");
});
