const express = require("express");
const app = express();
const port = 3000;

// a middleware that enables us to read the received JSON data
app.use(express.json());

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Mark", age: 19 },
];
// a GET request on endpoint http://localhost:3000/users
app.get("/users", (req, res) => {
    // set the response status code to 200 (OK)
    res.status(200);
    // sends back a response of all users
    res.json(users);
  });
//   app.get("/first", (req, res) => {
      
//     //  const firstUser = (users[0])
//     //  console.log(firstUser)
//     // // set the response status code to 200 (OK)
//     // res.status(200);
//     // sends back a response of all users
//     res.json("hello");

//   });

app.get("/firstUser" , (req,res)=>{
    console.log("nnnnnnnnn")
    res.status(200)
    res.json("hi")
})
  //paramete
  app.get("/user/:name",(req,res)=>{
    const user = req.params.name
    const found = users.find((element)=>{
        return element.name === user;
    });
        if(found){
            res.status(200);
            res.json(found);
        }
        else{
            res.status(404);
            res.json("User not found");

        }
    })
    
    app.post("/create/user", (req, res) => {
        
        const newUser = { name: req.body.name, age: req.body.age }
        users.push(newUser);
        res.status(201);
        
        res.json(newUser);
       
      });
      
  



app.listen(port,()=>{
    console.log(`listen .....on ${port}`)
})
