import './Home.css';
import React, { useState } from 'react';
import axios from 'axios';
import NavHeader from '../Navbar/NavHeader.js';

function Home() {
  const [rows, setRows] = useState([]);

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [recipeName, setRecipeName] = useState('');

  const [totalPrice, setTotalPrice] = useState(0.00);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const getItem = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/getitembyname?name=${itemName}`);
      console.log(response.data);
      const item = response.data;
      addRow(item.name, item.price, itemQuantity);
    } catch (err) {
      console.error("Error fetching item.", err);
    }
  }

  const getRecipeItems = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/getrecipebyname?name=${recipeName}`);
      console.log(response.data);
      const items = response.data[0].Items;
      console.log(items);
      await Promise.all(items.map(async (item) => {
        await addRow(item.name, item.price, 1);
      }));
    } catch (err) {
      console.error("Error fetching recipe.", err);
    }
  }

  const addRow = async (itemName, itemPrice, itemQtty) => {
    console.log(itemName);
    const totalItemPrice = (itemPrice * parseInt(itemQtty)).toFixed(2);
    
    setTotalPrice(prevTotalPrice => (parseFloat(prevTotalPrice) + parseFloat(totalItemPrice)).toFixed(2));
    setTotalQuantity(prevTotalQuantity => prevTotalQuantity + parseInt(itemQtty));
  
    setRows(prevRows => [...prevRows, { id: prevRows.length + 1, name: itemName, price: itemPrice, quantity: itemQtty }]);
  
    setItemName('');
    setItemQuantity(0);

    setRecipeName('');
  }

  const removeRow = (rowId, rowPrice, rowQuantity) => {
    setRows(rows.filter(row => row.id !== rowId));
    const totalItemPrice = (parseFloat(rowPrice) * parseInt(rowQuantity)).toFixed(2);
    const ttlPrce = (parseFloat(totalPrice) - parseFloat(totalItemPrice)).toFixed(2);

    setTotalPrice(ttlPrce);
    setTotalQuantity(parseInt(totalQuantity) - parseInt(rowQuantity));
  }

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  }

  const recipeNameHandler = (e) => {
    setRecipeName(e.target.value);
  }

  const itemQuantityHandler = (e) => {
    setItemQuantity(e.target.value);
  }

  return (
    <div>
      <NavHeader />
      <div className='page_header'>
        <h1 className='header-text'>Grocery List</h1>
      </div>
      <table className='list-table' id='itemTable'>
        <thead>
          <tr className='list-header-row'>
            <th className='list-header'>Item</th>
            <th className='list-header'>Price</th>
            <th className='list-header'>Qty</th>
            <th className='list-header'>Total</th>
            <th className='list-header'></th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>${row.price}</td>
              <td>{row.quantity}</td>
              <td>${(row.price * row.quantity).toFixed(2)}</td>
              <td><button className='delete-btn' onClick={() => removeRow(row.id, row.price, row.quantity)}>X</button></td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td></td>
            <td id='totalQuantity'>{totalQuantity}</td>
            <td id='totalPrice'>${totalPrice}</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <br />

      <div className="input-table">
        <form action='' id='newItemForm' className='newItemForm'>
          <div className='inputs-div'>
            <div className='input-div'>
              <label className='input-label'>Item Name: </label>
              <input className='input-box' type='text' name='name' id='name' value={itemName} required onChange={itemNameHandler} />
            </div>
            <div className='input-div'>
              <label className='input-label'>Quantity: </label>
              <input className='input-box' type='number' name='quantity' id='quantity' value={itemQuantity} onChange={itemQuantityHandler} />
            </div>
          </div>
          <div className='btn-div'>
            <button className='add-btn' onClick={getItem}>Add Item to List</button>
          </div>
        </form>

        <form action='' id='recipeForm' className='recipeForm'>
          <div className='inputs-div'>
            <div className='input-div'>
              <label className='input-label'>Recipe Name: </label>
              <input className='input-box' type='text' name='name' id='name' value={recipeName} required onChange={recipeNameHandler} />
            </div>
          </div>
          <div className='btn-div'>
            <button className='add-btn' onClick={getRecipeItems}>Add Recipe Items to List</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;