const { ConnectToMongodb } = require('./databaseInit')
const TodoModel = require('./models/todo.model.')


ConnectToMongodb(); // connect to database

async function seed() {
    // Clear existing data
    await TodoModel.deleteMany({})
    // payloads 
    const todos = [
        {
            title: 'Task 1',
            description: 'Complete task 1',
            completed: false
        },
        {
            title: 'Task 2',
            description: 'Complete task 2',
            completed: true
        },
        {
            title: 'Task 3',
            description: 'Complete task 3',
            completed: false
        }
    ];
    // insert data
    return TodoModel.create(todos);
}

seed().then(res => {console.log('Seed data has been successful ');}).catch(err => console.log('Something going wrong ', err))