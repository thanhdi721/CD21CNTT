const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const route = require('./routes');

const db = require('./config/db');
// Connect to Database
db.connect(); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
//app.use(morgan('combined'));

// Template engine
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a+b, // cộng cho số thứ tự của bảng đếm từ 1
}
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views'));

// Routes init
route(app);

// Action --> Dispatcher ---> Function Handler


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
}); 
