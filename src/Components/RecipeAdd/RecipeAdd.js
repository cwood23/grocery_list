import React, { useState } from 'react';
import NavHeader from "../Navbar/NavHeader";
import axios from 'axios';

function RecipeAdd() {
    const [recipeName, setRecipeName] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemList, setItemList] = useState([]);

    const handleItemNameChange = (e) => {
        setItemName(e.target.value);
    }

    const handleRecipeNameChange = (e) => {
        setRecipeName(e.target.value);
    }

    const removeItem = (itemName) => {
        setItemList(itemList.filter(item => item !== itemName));
    }

    const addItemToRecipe = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/getitembyname?name=${itemName}`);
            const item = response.data;
            console.log(item.name);
            setItemList(prevItemList => [...prevItemList, item.name]);
            setItemName('');
        } catch (err) {
            console.error("Error fetching item.", err);
        }
    }

    const handleCreateRecipe = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/createnewrecipe', {
                name: recipeName,
                itemNames: itemList
            });
            console.log(response);
            setRecipeName('');
            setItemName('');
            setItemList([]);
        } catch (err) {
            console.error("Error creating recipe.", err);
        }
    }

    return (
        <div>
            <NavHeader />
            <div className='page_header'>
                <h1 className='header-text'>Create a New Recipe</h1>
            </div>
            <div>
                {itemList.map(item => (
                    <div>
                        <h2>{item} <button className='delete-item-btn' onClick={() => removeItem(item)}>X</button></h2>
                    </div>
                ))}
            </div>
            <form id='newItemForm' className='newItemForm'>
                <div className='inputs-div'>
                    <div className='input-div'>
                        <label className='input-label'>Add an Item: </label>
                        <input className='input-box' type='text' name='name' id='name' value={itemName} required onChange={handleItemNameChange} />
                        <button className='delete-btn' onClick={addItemToRecipe}>+</button>
                    </div>
                    <div className='input-div'>
                        <label className='input-label'>Recipe Name: </label>
                        <input className='input-box' type='text' name='name' id='name' value={recipeName} required onChange={handleRecipeNameChange} />
                    </div>
                </div>
                <div className='btn-div'>
                    <button className='add-btn' onClick={handleCreateRecipe}>Create Recipe</button>
                </div>
            </form>
        </div>
    )
}

export default RecipeAdd;