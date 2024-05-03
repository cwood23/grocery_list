import express from "express";
import bodyParser from "body-parser";
import { createNewItem, getAllItems, getItemByName } from "./controllers/itemController.js";

const router = express.Router();
var jsonParser = bodyParser.json();

router.get('/getallitems', getAllItems);
router.get('/getitembyname', getItemByName);
router.post('/createnewitem', jsonParser, createNewItem);

export default router;