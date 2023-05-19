const express = require('express');
const app = express();
const { ConnectToMongodb } = require('./database/databaseInit');
const todoRouter = require('./route/tod.route');

const port = 3000; // You can change this to your desired port number


ConnectToMongodb() // connect to mongodb
app.get('/health', (req, res) => {
    res.send('i am healthy');
});

app.use(express.json());
app.use('/v1/todo', todoRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});