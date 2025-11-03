import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
// test
//A2i1BBBbZSt48ooy
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
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


app.use((req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ 
    success: false,
    message,
    statusCode,
  });
});
