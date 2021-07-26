const express = require("express");

const app = express();

/**
 * GET - Buscar uma informação dentro do servidor.
 * POST - Inserir uma informação dentro do servidor.
 * PUT - Alterar uma informação dentro do servidor.
 * PATCH - Alterar uma informação específica dentro do servidor.
 * DELETE - Deletar uma informação dentro do servidor.
 */

app.get("/courses", (req, res) => {
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (req, res) => {
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
  return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Curso 6", "Curso 3", "Curso 4"]);
});

/**
 * Rodando o servidor back-end.
 */
app.listen(3001, () => {
  console.log("Servidor backend inicializado com sucesso na porta " + 3001);
});
