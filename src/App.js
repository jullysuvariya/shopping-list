import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const App= () => {

  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 2, isSelected: false },
    { itemName: 'item 3', quantity: 5, isSelected: false },
  ]);

  const [inputItems, setInputItems] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(8);

  const inputItemHandler = (e) => {
      setInputItems(e.target.value);
  };

  const handlerAddButtonClick = (e) => {
		e.preventDefault();
		setItems([
			...items, { itemName: inputItems, quantity: 1, isSelected: false }
		]);
		setInputItems("");
	};

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input className="add-item-input"
            value={inputItems} 
            inputItems={inputItems} 
            items={items}
            setItems={setItems}
            placeholder="Add an item..." 
            type="text" 
            onChange={inputItemHandler} />
          <FontAwesomeIcon icon={faPlus} onClick={handlerAddButtonClick} />
        </div>
        <ItemList items={items} setItems={setItems} totalItemCount={totalItemCount} setTotalItemCount={setTotalItemCount} />
      </div>
    </div> 
  );
}

export default App;
