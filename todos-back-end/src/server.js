const express = require('express');

const fakeTodos = [{
    id: '123',
    text: 'go to the grocery store',
    isCompleted: false,
}, {
    id: '234',
    text: 'learn full stack dev',
    isCompleted: true, 
}]

const app = express ();

app.get('/todos', (req, res) => {
    res.json(fakeTodos);
});

app.listen (8080, () => {
    console.log('server is listening on port 8080');
});