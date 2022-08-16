const express = require('express');

const app = express();

app.use(express.json());
/*
*  GET - Buscar informação no servidor.
*  POST - Inserir informação no servidor.
*  PUT - Alterar uma informação no servidor.
*  PATCH - Alterar uma informação especifica.
*  DELETE - Deletar uma informação no servidor.
* */

/*
*   Tipos de Parametros
*
*   Route Params => Indentificar um recurso para editat/deletar/buscar
*   Query Params => Paginação / Filtros
*   Body Params => Objeto para inserção/alteração de recursos (JSON)
* */

app.get('/courses', (request, response) => {
    const query = request.query
    console.log(query);
    return response.json(["Course 1", "Course 2", "Course 3"]);
});

app.post('/courses', (request, response) => {
    const body = request.body
    console.log(body);
    return response.json(["Course 1", "Course 2", "Course 3", "Course 4"])
})

app.put('/courses/:id', (request, response) => {
    const { id } = request.params;
    console.log(id);
    return response.json(["Course 6", "Course 2", "Course 3", "Course 4"])
})

app.patch('/courses/:id', (request, response) => {
    return response.json(["Course 6", "Course 7", "Course 3", "Course 4"])
})

app.delete('/courses/:id', (requestm, response) => {
    return response.json(["Course 6", "Course 7", "Course 4"])
})

app.listen(3333)