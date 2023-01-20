const express = require('express');
const exphbs = require("express-handlebars");
const path = require('path');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
    '.hbs', 
    exphbs.engine({
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        defaultlayout: 'main',
        extname: '.hbs'
    })
);
app.set('view engine', '.hbs');

// middleware

// routes
app.use(require('./routes/index.routes.js'));
// static files


module.exports = app;