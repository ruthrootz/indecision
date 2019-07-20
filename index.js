const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening'));
app.use(express.static('public'));

// - serve web pages
// - make data.js NOT public
// - get and post training data to data.js
// - save admin login to data.js