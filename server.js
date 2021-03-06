const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

const db = require('knex')({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
     ssl: { rejectUnauthorized: false }
    }
  });




// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    db.select('*').from('plantdata').then(data => res.json(data)).catch(err => res.send(err));
});

app.post('/data', (req, res) => {
   const {dth11Error,soil,humidity,temperature} = req.body;
   db('plantdata').insert({dth11error: dth11Error, soil: soil, humidity: humidity, temperature: temperature})
   .then(data => console.log)
   .catch(err => res.send(err))
   res.send('Server recevied the Data')
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))