import express from "express";
import bodyParser from "body-parser";
import { createNewItem, getAllItems, getItemByName } from "./controllers/itemController.js";
import { createNewRecipe, getRecipeByName } from "./controllers/recipeController.js";

const router = express.Router();
var jsonParser = bodyParser.json();

router.get('/getallitems', getAllItems);
router.get('/getitembyname', getItemByName);
router.post('/createnewitem', jsonParser, createNewItem);

router.get('/getrecipebyname', getRecipeByName);
router.post('/createnewrecipe', jsonParser, createNewRecipe);

export default router;