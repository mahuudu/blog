const path = require('path');
const express = require('express');
const app = express();
const port = 3000	
var exphbs  = require('express-handlebars');

const route = require('./routes/index.js');
const db = require('./config/db/index');

app.use(express.static(path.join(__dirname, 'public')));


var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.set('views', __dirname + '/resources/views');
	
//route init	
route(app);


db.connect();



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})