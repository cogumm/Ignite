const express = require("express");

/**
 * Instâncianado a aplicação utilizando o express.
 */
const app = express();

/**
 * Utilizando o express para converter o JSON em objeto do JS/TS.
 */
app.use(express.json());

/**
 * GET - Buscar uma informação dentro do servidor.
 * POST - Inserir uma informação dentro do servidor.
 * PUT - Alterar uma informação dentro do servidor.
 * PATCH - Alterar uma informação específica dentro do servidor.
 * DELETE - Deletar uma informação dentro do servidor.
 */

/**
 * Tipos de parâmetros.
 *
 * Router Params => Identificar um recurso listar/editar/deletar.
 * Query Params => Paginação / filtros de busca.
 * Body Params => Objetos nas inserções / alterações (JSON)
 */

app.get("/courses", (req, res) => {
  const query = req.query;
  console.log(query);
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (req, res) => {
  const body = req.body;

  console.log(body);
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);
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
