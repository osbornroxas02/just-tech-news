const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const helpers = require('./utils/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

//Handlebars const
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// turn on routes
app.use(routes);

//Handlebars app
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to database and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

//when updating the relationships between the tables, use sequelize.sync({ force: true }) to drop the tables and recreate them! Once confirmed the database tables were recreated, switch back to using { force: false }





