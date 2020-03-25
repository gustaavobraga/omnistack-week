const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express()

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Método HTTP:
 * 
 * GET: Buscar uma informação de back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?", serve para (Filtrar e Paginação)
  *               Ex: http://localhost:3333/users?name=Diego
  * Route Params: Parâmetros utilizados para utilizados para identificar um único recursos, na rota 
  *               do back-end colocar a rota normal e depois coloca "/:id", lá na URL colocar colocar 
  *               a rota normal e depois colocar o id do objeto desejado, Ex: http://localhost:3333/users/1
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Request e Response
   * 
   * Request: É onde é guadado todo os dados que vem atraves da requisição do usuário.
   * Response: Ele é responsável por armazenar a resposta que irar retornar para o usuário.
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL.
    * NoSQL: MongoDB, CouchDB, etc.
    */



app.listen(3333);