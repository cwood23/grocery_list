import './Home.css';
import React, { useState } from 'react';
import axios from 'axios';
import NavHeader from '../Navbar/NavHeader.js';

function Home() {
  const [rows, setRows] = useState([]);

  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0.00);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addRow = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/getitembyname?name=${itemName}`);
      console.log(response.data);
      const item = response.data;
      const newRow = { id: rows.length + 1, name: item.name, price: item.price, quantity: itemQuantity };
      setRows([...rows, newRow]);
      const totalItemPrice = (item.price * parseInt(itemQuantity)).toFixed(2);
      const ttlPrce = (parseFloat(totalPrice) + parseFloat(totalItemPrice)).toFixed(2);
      setTotalPrice(ttlPrce);
      setTotalQuantity(parseInt(totalQuantity) + parseInt(itemQuantity));

      setItemName('');
      setItemQuantity(0);
    } catch (err) {
      console.error("Error fetching item.", err);
    }
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

      <form action='' id='newItemForm' className='newItemForm'>
        <div className='inputs-div'>
          <div className='input-div'>
            <label className='input-label'>Name: </label>
            <input className='input-box' type='text' name='name' id='name' value={itemName} required onChange={itemNameHandler} />
          </div>
          <div className='input-div'>
            <label className='input-label'>Quantity: </label>
            <input className='input-box' type='number' name='quantity' id='quantity' value={itemQuantity} onChange={itemQuantityHandler} />
          </div>
        </div>
        <div className='btn-div'>
          <button className='add-btn' onClick={addRow}>Add Item to List</button>
        </div>
      </form>

      <p>Get the code <a href='https://github.com/cwood23/grocery_list_app'>here</a></p>
    </div>
  );
}

export default Home;