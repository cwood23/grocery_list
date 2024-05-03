import express from "express";
import { getAllItems } from "./controllers/itemController.js";

const router = express.Router();

router.get('/getallitems', getAllItems);

export default router;