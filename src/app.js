import express from 'express';
import { authMiddleware } from './MiddleWares/authMiddleWare.js';

const app = express();

app.get("/auth", authMiddleware,(req,res)=>{
  res.send("IsAuthorized")
})

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.post("/user", (req, res, next) => {
  next();
  res.send("User1");
}, (req, res) => {
  res.send("Second function");
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});