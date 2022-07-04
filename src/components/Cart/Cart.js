import React, { useState } from 'react';
import RandomFood from '../RandomFood/RandomFood';
import SelectedFood from '../SelectedFood/SelectedFood';
import './Cart.css';

const Cart = ({cart,getRandomFood,resetCart,random}) => {
    
    // const findRandom = cart.find(food=>food.id === selectedRandomFood.id)
    // Find random food

   
    return (
        <div className='cart-component'>
            <h2>Selected Food </h2>
            {
                cart.map(food => <SelectedFood food={food}
                        key={food.id}
                        ></SelectedFood>)                    
            }
            <RandomFood random={random}></RandomFood>        
            <div className="button-container">
                <button className='btn' id="select-random-btn" onClick={getRandomFood}>Select Random 1</button>
                <button className='btn' id="reset-btn" onClick={resetCart}>Reset The Cart</button>
            </div>
        </div>
    );
};

export default Cart;