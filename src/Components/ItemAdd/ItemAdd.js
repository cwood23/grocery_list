import NavHeader from '../Navbar/NavHeader';
import Message from "../Message/Message.js";
import React, { useState } from 'react';
import axios from 'axios';

function ItemAdd() {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

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
            setItemName('');
            setItemPrice(0);
        } catch (err) {
            if (err.message === 'Request failed with status code 409') {
                setErrorMessage('Item already exists.')
            } else {
                setErrorMessage("Error creating recipe.");
            }
        }
    }

    return (
        <div>
            <NavHeader />
            <div className='page_header'>
                <h1 className='header-text'>Add a New Item to Store</h1>
            </div>
            {errorMessage !== '' &&
                <Message message={errorMessage} isError={true} />
            }
            <form id='newItemForm' className='newItemForm'>
                <div className='inputs-div'>
                    <div className='input-div'>
                        <label className='input-label'>Name: </label>
                        <input className='input-box' type='text' name='name' id='name' value={itemName} required onChange={handleNameChange} />
                    </div>
                    <div className='input-div'>
                        <label className='input-label'>($) Price: </label>
                        <input className='input-box' type='number' name='price' id='price' min='0' step='.01' value={itemPrice} onChange={handlePriceChange} />
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