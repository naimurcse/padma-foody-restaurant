import React from 'react';
import SelectedFood from '../SelectedFood/SelectedFood';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);  
    return (
        <div className='cart-component'>
            <h2>Selected Food </h2>
            {
                cart.map(food=><SelectedFood food={food}></SelectedFood>)
            }
            <div className="button-container">
                <button className='btn' style={{padding:"16px 35px", backgroundColor:"green",color:"#fff"}}>Select Random 1</button>
                <button className='btn' style={{backgroundColor:"tomato",color:"#fff"}}>Reset The Cart</button>
            </div>
        </div>
    );
};

export default Cart;