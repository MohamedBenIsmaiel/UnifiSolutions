# Todo App

This is a simple todo app built using Node.js, Express.js, MongoDB, and Mongoose. It allows you to manage your tasks by creating, reading, updating, and deleting todos.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js: https://nodejs.org
- MongoDB: https://www.mongodb.com 

## NOTE:- you can run mongodb locally or you can run docker-compose file `docker compose up -d` but you should install docker compose first

## Installation

1. Clone the repository:

git clone https://github.com/MohamedBenIsmaiel/UnifiSolutions

2. Navigate to the project directory:

cd todo-app


3. Install the dependencies:

npm install



4. Seed data:

npm run seed


4. Start the application:

npm start


The application will be available at http://localhost:3000.

## API Endpoints

The following API endpoints are available:

- `GET /todos`: Get all todos.
- `GET /todos/:id`: Get a specific todo by its ID.
- `POST /todos`: Create a new todo.
- `PUT /todos/:id`: Update a todo by its ID.
- `DELETE /todos/:id`: Delete a todo by its ID.

### Request and Response Examples

#### Get all todos

Request:


GET /todos


Response:
Status: 200 OK
Content-Type: application/json

[
{
"_id": "60a781f21df43b001e681a4c",
"title": "Task 1",
"description": "Complete task 1",
"completed": false,
"__v": 0
},
{
"_id": "60a781f21df43b001e681a4d",
"title": "Task 2",
"description": "Complete task 2",
"completed": true,
"__v": 0
},
...
]



#### Create a new todo

Request:

POST /todos
Content-Type: application/json

{
"title": "Task 3",
"description": "Complete task 3"
}


Response:
Status: 200 OK
Content-Type: application/json

{
"_id": "60a7829e1df43b001e681a4e",
"title": "Task 3",
"description": "Complete task 3",
"completed": false,
"__v": 0
}