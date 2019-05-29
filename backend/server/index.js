require('./config');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const server = express();


// middleware de json

server.use(express.json());

// server.set('views', Path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

server.use(cors({
  exposedHeaders: ['Authorization']
}));

// server.use('/server', express.static(__dirname + '/views'));
server.set('views', `${__dirname}/views`);

server.use(require('./routes'));

server.listen(PORT, () => {
  console.log(`Server ready on http://localhost:${PORT}`);
});