const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;


let data = {};

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));h
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send(data);
});




app.post('/data', (req, res) => {
   const {dth11Error,soil,humidity,temperature} = req.body;
   data = {dth11Error: dth11Error, SoilMoisture: soil, Humidity: humidity, Temperature: temperature}
   res.send(`error is ${dth11Error}: soil is ${soil}: humidity is ${humidity}: temperature is ${temperature}`)
})

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))