const mongoose = require('mongoose');

function ConnectToMongodb() {
    mongoose.connect('mongodb://localhost/todo-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB', error);
        });
}

module.exports = { ConnectToMongodb }