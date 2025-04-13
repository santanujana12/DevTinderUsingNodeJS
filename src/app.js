import express from "express";
import mongoose from "mongoose";
import { mongoDbConnectionService } from "./config/database.js";
import User from "./Models/userModel.js";

const app = express();

app.use(express.json());

app.post("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

app.get(
  "/abc/:id",
  (req, res, next) => {
    // console.log(req.params);
    next();
    // res.send("Hello");
  },
  (req, res) => {
    console.log("This is the second callback function");
    res.send(req.params);
  }
);

app.get("/hello", (req, res, next) => {
  res.send("Hello World!");
});

app.post("/register",(req,res)=>{
  const {firstName, lastName, emailId, password, age, gender} = req.body;
  
  // One way of creating user
  // const user = new User(req.body);
  // await user.save();
  console.log(req.body);
  try{
    User.create({
      firstName,
      lastName,
      emailId,
      password,
      age,
      gender,
    }),
    res.status(200).send("User registered successfully");
  }catch(err){
    console.log(err);
    res.status(500).send("Error registering user");
  }
})



// Always call db connection first before starting the server
const startExpressWithMongoDb = async () => {
  try {
    await mongoDbConnectionService;
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

startExpressWithMongoDb();