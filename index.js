const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(3000, () => console.log('listening'));
app.use(express.static('public'));
app.use(express.json({ limit : '1mb' }));

const database = new Datastore('trainingData.bd');
database.loadDatabase();

app.get('/data', (request, response) => {
    database.find({}, (error, data) => {
        response.json(data);
    });
});

app.post('/data', (request, response) => {
    const data = request.body;
    database.insert(data);
    response.json({
        status : 'success',
        data : request.body,
    });
});

// + serve web pages
// + create a database and post data to it from loggedin.js
// + train the net from the data in trainingData.db
// - save admin login in another database that doesn't get posted to