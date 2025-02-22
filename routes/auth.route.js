import express from "express";
import { singup } from "../controllers/auth.control.js";

const router = express.Router();

router.post("/singup", singup);

export default router;
