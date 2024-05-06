import React, { useState } from 'react';
import NavHeader from "../Navbar/NavHeader";
import axios from 'axios';

function RecipeAdd() {
    const [recipeName, setRecipeName] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemList, setItemList] = useState(['Ham', 'Bacon']);

    const handleNameChange = (e) => {
        setRecipeName(e.target.value);
    }

    const handleCreateRecipe = (e) => {
        e.preventDefault();
        console.log(recipeName);
        setRecipeName('');
        setItemName('');
    }

    return (
        <div>
            <NavHeader />
            <div className='page_header'>
                <h1 className='header-text'>Create a New Recipe</h1>
            </div>
            <div>
                {itemList.map(item => (
                    <h2>{item}</h2>
                ))}
            </div>
            <form id='newItemForm' className='newItemForm'>
                <div className='inputs-div'>
                    <div className='input-div'>
                        <label className='input-label'>Recipe Name: </label>
                        <input className='input-box' type='text' name='name' id='name' value={recipeName} required onChange={handleNameChange} />
                        <button className='delete-btn'>+</button>
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