import NavHeader from "../Navbar/NavHeader";
import React, { useState } from 'react';

function ItemAdd() {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(0);


    return (
        <div>
            <NavHeader />
            <div className='page_header'>
                <h1 className='header-text'>Add a New Item to Store</h1>
            </div>
            <form action='' id='newItemForm' className='newItemForm'>
                <div className='inputs-div'>
                    <div className='input-div'>
                        <label className='input-label'>Name: </label>
                        <input className='input-box' type='text' name='name' id='name' required />
                    </div>
                    <div className='input-div'>
                        <label className='input-label'>($) Price: </label>
                        <input className='input-box' type='number' name='price' id='price' min='0' step='.01' />
                    </div>
                </div>
                <div className='btn-div'>
                    <button className='add-btn'>Add Item to Store</button>
                </div>
            </form>
        </div>
    )
}

export default ItemAdd;