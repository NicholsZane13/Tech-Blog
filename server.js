const path = require('path');
const express = require('express');
const session = require('express-session');

const exphbs = require('express-handlebars');
const { allowedNodeEnvironmentFlags } = require('process');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));