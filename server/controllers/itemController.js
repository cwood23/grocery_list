import { Item } from "../models.js";

// Get All Items
export const getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        if (items) {
            res.status(200).send(items);
        } else {
            res.status(404).send("No items found.");
        }
    } catch (err) {
        res.status(500).send("Error finding items: " + err);
    }
}

// Get Item by name
export const getItemByName = async (req, res) => {
    const { name } = req.query;
    try {
        const item = await Item.findOne({ where: { name: name } });
        if (item) {
            res.status(200).send(item);
        } else {
            res.status(404).send("No item found.");
        }
    } catch (err) {
        res.status(500).send("Error finding item: " + err);
    }
}

// Create a new item given name and price
export const createNewItem = async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const item = await Item.findOne({ where: { name: data.name } });
        if (item) {
            res.status(409).send("Item already exists.");
        } else {
            const newItem = await Item.create({
                name: data.name,
                price: data.price
            });
            if (newItem) {
                res.status(201).send("Item created successfully.");
            }
        }
    } catch (err) {
        res.status(500).send("Error creating item: " + err);
    }
}