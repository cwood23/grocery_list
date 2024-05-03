import { Item } from "../models.js";

// Get All Items
export const getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        if (items) {
            res.send(items);
        } else {
            res.status(404).send("No items found.");
        }
    } catch (err) {
        res.status(500).send("Error finding items: " + err);
    }
}