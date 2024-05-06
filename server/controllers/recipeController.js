import { Item, Recipe } from '../models.js'

// Get recipe items by name
export const getRecipeByName = async (req, res) => {
    try {
        const { name } = req.query
        const recipe = await Recipe.findAll({
            include: [
                {
                    model: Item
                },
            ],
            where: {
                name: name
            }
        })
        if (recipe) {
            res.status(200).send(recipe);
        } else {
            res.status(404).send("No recipe found.");
        }
    } catch (err) {
        res.status(500).send("Error finding recipe.");
    }
}

// Create new recipe
export const createNewRecipe = async (req, res) => {
    const { name, itemIds } = req.body;
    try {
        const recipe = await Recipe.findOne({ where: { name: name } });
        if (recipe) {
            res.status(409).send("Recipe already exists.");
        } else {
            const newRecipe = await Recipe.create(
                {
                    name: name
                }
            );
            if (newRecipe) {
                await Promise.all(itemIds.map(async (itemId) => {
                    var item = await Item.findByPk(itemId);
                    await newRecipe.addItem(item);
                }));
            }
            res.status(201).send("Recipe successfully created.");
        }
    } catch (err) {
        console.error("Error creating recipe.", err);
        res.status(500).send("Error creating recipe.");
    }
}