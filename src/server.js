const express = require('express');
const exphbs = require("express-handlebars");
const path = require('path');
const morgan = require('morgan');
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
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require('./routes/index.routes.js'));


// static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;