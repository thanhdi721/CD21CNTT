const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const route = require('./routes');

const html = require('express-handlebars');
const route = require('./routes');


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));






app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
