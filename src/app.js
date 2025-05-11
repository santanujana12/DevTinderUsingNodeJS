import express from "express";
import { mongoDbConnectionService } from "./config/database.js";
import { Register } from "./controllers/userMethods/registration.js";
import { Login } from "./controllers/userMethods/login.js";

const app = express();

app.use(express.json());

app.post("/register", Register);
app.post("/login", Login);


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
