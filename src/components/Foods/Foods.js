import { fa0, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Foods.css';
const Foods = ({food}) => {
    const {name,id,image,price} = food;
    return (
        <div className='food-card'>
            <div>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>Price: {price} BDT</p>
            </div>
            <button className='btn'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Foods;