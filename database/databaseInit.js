const mongoose = require('mongoose');

function ConnectToMongodb() {
    const mongoUrl = `mongodb://admin:adminpassword@localhost:27017/todo-app?authSource=admin`
    mongoose.connect(mongoUrl, {
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