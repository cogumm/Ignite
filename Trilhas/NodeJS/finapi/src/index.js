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

  // Verificando se o cpf já existe no array.
  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return res.status(400).json({ error: "Customer already exists!" });
  }

  customers.push({
    // Gerando o id.
    id: uuidv4(),
    name,
    cpf,
    statement: [],
  });

  return res.status(201).send();
});

/**
 * Listando o extrato do cliente.
 */
app.get("/statement/:cpf", (req, res) => {
  const { cpf } = req.params;

  // Buscando pelo cpf.
  const customer = customers.find((customer) => customer.cpf === cpf);

  return res.json(customer.statement);
});

app.listen(3001, () => {
  console.log("Servidor backend inicializado com sucesso na porta 3001");
});
