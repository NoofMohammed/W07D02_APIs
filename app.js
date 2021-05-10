const express = require("express");
const app = express();
const port = 3000;

// a middleware that enables us to read the received JSON data
app.use(express.json());

const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

app.get("/todos", (req,res)=>{
    res.status(200);
    res.json(todos)
})
app.post("/create/todo",(req,res) => {
    const newTodo = {todo: req.body.todo , isCompleted: req.body.isCompleted}
    todos.push(newTodo);
    res.status(201);
    res.json(newTodo)
})
// app.put("update/todo/:name",(req,res) => {
//     const updateTodo = todos[1].todo="cook"
//     const updateTodo2 =  todos[1].isCompleted=true
//     todos.push(newTodo);
//     res.status(201);
//     res.json("hi")
// })
app.delete("/delete/todo/:name",(req,res) => {
    const dele = todos.splice(0,1);
    console.log(dele)
    res.status(201);
    res.json(dele)

})

app.listen(port, () => {
    console.log(`listen .....on ${port}`);
  });