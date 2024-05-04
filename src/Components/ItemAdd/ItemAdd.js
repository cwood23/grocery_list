import NavHeader from '../Navbar/NavHeader';
import React, { useState } from 'react';
import axios from 'axios';

function ItemAdd() {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(0);

    const handleNameChange = (e) => {
        setItemName(e.target.value);
    }

    const handlePriceChange = (e) => {
        setItemPrice(e.target.value);
    }

    const handleCreateItem = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/createnewitem', {
                name: itemName,
                price: itemPrice
            });
            console.log(response);
        } catch (err) {
            if (err.response.status === 409) {
                console.log("Item already exists.")
            } else {
                console.error("Error creating item.", err);
            }
        }
    }

    return (
        <div>
            <NavHeader />
            <div className='page_header'>
                <h1 className='header-text'>Add a New Item to Store</h1>
            </div>
            <form id='newItemForm' className='newItemForm'>
                <div className='inputs-div'>
                    <div className='input-div'>
                        <label className='input-label'>Name: </label>
                        <input className='input-box' type='text' name='name' id='name' required onChange={handleNameChange} />
                    </div>
                    <div className='input-div'>
                        <label className='input-label'>($) Price: </label>
                        <input className='input-box' type='number' name='price' id='price' min='0' step='.01' onChange={handlePriceChange} />
                    </div>
                </div>
                <div className='btn-div'>
                    <button className='add-btn' onClick={handleCreateItem}>Add Item to Store</button>
                </div>
            </form>
        </div>
    )
}

export default ItemAdd;