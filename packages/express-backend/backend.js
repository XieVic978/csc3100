import express from "express"

const app = express();
const port = 8000;

app.use(express.json());
app.get("/", (req,res) =>{
    res.send("Hello World!");
});

const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor",
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer",
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor",
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress",
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };

  

  const findUserByName = (name) => {
    return users["users_list"].filter((user) => user["name"] === name);
  };


  const findUserByID = (id) => {
    return users["users_list"].find((user) => user["id"] === id)
  }

  app.get("/users/:id", (req, res) =>{
    const id = req.params["id"]; // req.params.id
    let result = findUserByID(id);
    if(result === undefined){
        res.status(404).send("Resource not found");
    }else{
        res.send(result);
    }
  })

  const addUser = (user) => {
    users["users_list"].push(user);
    return user;
  }

  app.post("/users", (req,res) =>{
    const userToAdd = req.body;
    addUser(userToAdd);
    res.send();
  })

  const removeUser = (user_id) =>{
    //users["users_list"] = users["users_list"].filter(user => user.id !==user_id)
    const index = users["users_list"].findIndex((user) => user.id === user_id);

    if (index !== 1){ //if the userId exists then remove it 
      users["users_list"].splice(index,1); //(index, #of objects to remove)
    }

  };

  

  app.delete("/users/:id", (req,res) =>{
    const userToDelete = req.params.id;
    removeUser(userToDelete);
    res.send()
  })


  const findAllUsers = (name, job) =>{
    return users["users_list"].filter((user) => user["name"] === name && user["job"] === job);

  }
  app.get("/users" , (req,res) =>{
    const name = req.query.name;
    const job = req.query.job;
    if (name !== undefined && job!==undefined){
        let result = findAllUsers(name,job);
        result = {users_list:result};
        res.send(result);
    }
    else if(name !== undefined){
        let result = findUserByName(name);
        result = {users_list:result};
        res.send(result);
    }
    else{
        res.send(users);
    }
    
  })


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});