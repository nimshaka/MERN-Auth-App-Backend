import express from "express";
import mongoose from "mongoose";


mongoose
  .connect(
    "mongodb+srv://nimshakaravintha:A2i1BBBbZSt48ooy@mern-auth-app.obtvk.mongodb.net/?retryWrites=true&w=majority&appName=MERN-auth-app"
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
