const express = require("express");
const app = express();
const port = 3000;

// a middleware that enables us to read the received JSON data
app.use(express.json());

const todos = [
  { todo: "wake up", isCompleted: false },
  { todo: "Eat Breakfast", isCompleted: false },
];

app.get("/todos", (req, res) => {
  res.status(200);
  res.json(todos);
});

app.post("/create/todo", (req, res) => {
  const newTodo = { todo: req.body.todo, isCompleted: req.body.isCompleted };
  todos.push(newTodo);
  res.status(201);
  res.json(newTodo);
});

app.put("/update/todo/:name", (req, res) => {
  let update = {};
  const name = req.params.name;
  for (let i = 0; i < todos.length; i++) {
    if (name === todos[i].todo) {
      todos[i].todo = req.body.todo;
      todos[i].isCompleted = req.body.isCompleted;
      update = todos[i];
    }
  }

  res.status(201);
  res.json(update);
});
app.delete("/delete/todo/:name", (req, res) => {
  let dele = {};
  const name = req.params.name;
  for (let i = 0; i < todos.length; i++) {
    if (name === todos[i].todo) {
      dele = todos.splice(i, 1);
    }
  }
  res.status(201);
  res.json(dele);
});
app.put("/complete/todo/:name", (req, res) => {
  res.send("bbbb");
  let complete = {};
  const name = req.params.name;
  for (let i = 0; i < todos.length; i++) {
    if (name === todos[i].todo) {
      todos[i].isCompleted = true;
      complete = todos[i];
    }
  }
  res.status(201);
  res.json(complete);
});
app.get("/completed/todos", (req, res) => {
  let completeAll = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].isCompleted === true) {
      completeAll.push(todos[i]);
    }
  }
  res.status(201);
  res.json(completeAll);
});

app.listen(port, () => {
  console.log(`listen .....on ${port}`);
});
