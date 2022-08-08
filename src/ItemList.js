import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ItemList = ({ items, setItems, totalItemCount, setTotalItemCount }) => {

	const handleQuantityIncrese = (index) => {
		if(items[index].isSelected){
			alert("Item marked completed,can't change quantity")
			return;
		}
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrese = (index) => {
		if(items[index].isSelected){
			alert("Item marked completed,can't change quantity")
			return;
		}
		const newItems = [...items];
		newItems[index].quantity--;
		setItems(newItems);
		calculateTotal();
	};
	
	const toggleComplete = (index) => {
		const newItems = [...items];
		newItems[index].isSelected = !newItems[index].isSelected;
		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);
		setTotalItemCount(totalItemCount);
	};

	return(
		<>
		<div className="item-list">
			{items.map((item,index) => (
				<div className="item-container">
					<div className="item-name" onClick={() => toggleComplete(index)}>
						{ item.isSelected ? (
							<>
								<FontAwesomeIcon icon={faCheckCircle} />
								<span className="completed">{item.itemName}</span>
							</>
						) : (
							<>
								<FontAwesomeIcon icon={faCircle} />
								<span>{item.itemName}</span>
							</>
						)}
					</div>	
					<div className="quantity">
						<button>
							<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrese(index)} />
						</button>
						<span>{item.quantity}</span>
						<button>
							<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrese(index)} />
						</button>
					</div>
				</div>
			))}
		</div>
		<div className="total">Total: {totalItemCount}</div>
		</>
	);
};

export default ItemList;