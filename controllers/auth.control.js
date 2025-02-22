import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";

export const singup = async(req, res, next) => {
   const { username, email, password } = req.body;
   const hashedPassword = bcryptjs.hashSync(password, 10);
   const newUser = new User({ username, email, password: hashedPassword }); 
   try {
     await newUser.save();
      res.status(200).json("User created successfully");
   } catch (err) {
      next(err);
   }
};

