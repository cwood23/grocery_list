import './App.css';
import React, { useState } from 'react';

function App() {
  const [rows, setRows] = useState([]);

  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState(-1.00);
  const [itemQuantity, setItemQuantity] = useState(-1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addRow = () => {
    const newRow = { id: rows.length + 1, name: itemName, price: itemPrice, quantity: itemQuantity};
    setRows([...rows, newRow]);
  }

  return (
    <div>
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
              <td>{row.price}</td>
              <td>{row.quantity}</td>
              <td>{row.price * row.quantity}</td>
              <td><button className='delete-btn'>X</button></td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td></td>
            <td id='totalQuantity'>0</td>
            <td id='totalPrice'>0</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <br />

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
          <div className='input-div'>
            <label className='input-label'>Quantity: </label>
            <input className='input-box' type='number' name='quantity' id='quantity' />
          </div>
        </div>
        <div className='btn-div'>
          <button className='add-btn' onClick={addRow}>Add Item</button>
        </div>
      </form>

      <p>Get the code <a href='https://github.com/cwood23/grocery_list_app'>here</a></p>
    </div>
  );
}

export default App;
