  //app run.page run
  //require express
const express = require("express");
  //express function,for real method n prop we use express
require("./db/connections");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;


//app.get("/", (req,res) => {
    //res.send("hello from the other sides riya.");
//})
  //is method se assign hoga
  //root ke liye (api create auto stre in db(stu registration create))
  //create post http method
  //route,callback(req,res) 
  app.use(express.json());
 
 

app.post("/students", (req,res) => {
    console.log(req.body);

    //from postman how acces postman to here
    const user = new Student(req.body)

    //for save in mongodb
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.send(e);
    })
    //return promise
    //res.send("hello from the other sides.");
   //url route student ko resonse krts to ye out milta btu uske liye listen 
  //live host ke liye port
  //khudka manual code no ke liye const port
});


app.listen(port, () => {
    console.log(`coonection is setup at ${port}`);
})
//result console.and cant get bcz route fol ko define nahikya so do  app.get
