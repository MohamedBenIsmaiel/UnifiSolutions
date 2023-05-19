const express = require('express');
const app = express();
var cors = require('cors')
var compression = require('express-compression')
const helmet = require('helmet');

const { ConnectToMongodb } = require('./database/databaseInit');
const todoRouter = require('./route/tod.route');
const { errorLogger , errorResponder, invalidPathHandler } = require('./middleware/errorHandling');

const port = 3000; // You can change this to your desired port number


app.use(cors())
app.use(compression())
app.use(helmet());

ConnectToMongodb() // connect to mongodb
app.get('/health', (req, res) => {
    res.send('i am healthy');
});

app.use(express.json());
app.use('/v1/todo', todoRouter);
app.use(errorLogger);
app.use(errorResponder)
app.use(invalidPathHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});