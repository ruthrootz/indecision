const express = require('express');
const Datastore = require('nedb');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));
app.use(express.json({ limit : '1mb' }));
const database = new Datastore('trainingData.bd');
database.loadDatabase();

app.get('/data', (request, response) => {
    database.find({}, (error, data) => {
        response.json(data);
    });
});

app.get('/login', (request, response) => {
    const data = { username : 'ruthisthegreatest', password : 'password123' };
    response.json(data);
});

app.post('/data', (request, response) => {
    const data = request.body;
    database.insert(data);
    response.json({
        status : 'success',
        data : request.body,
    });
});