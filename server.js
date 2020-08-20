const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

//Handlebars const
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

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



