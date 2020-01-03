const express = require('express');
const app = express();
const massive = require('massive');
const { getHouses, addHouse, deleteHouse, editHouse} = require('./controllers/')
require('dotenv').config();
const {CONNECTION_STRING, SESSION_SECRET} = process.env;

const PORT = 4000;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
    console.log('db connected');
})

app.use(express.json());

app.get('/api/houses', getHouses);
app.post('/api/houses', addHouse);
app.put('/api/houses/:id', editHouse)
app.delete('/api/houses/:id', deleteHouse)



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
