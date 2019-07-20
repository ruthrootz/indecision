const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening'));
app.use(express.static('public'));
app.use(express.json({ limit : '1mb' }));

app.post('/data', (request, response) => {
    console.log(request.body);
    response.json({
        status : 'success',
        data : request.body,
    });
});

// + serve web pages
// - create a database and post data to it from loggedin.js
// - make data.js NOT public
// - get and post training data to data.js
// - save admin login to data.js