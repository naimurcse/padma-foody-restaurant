import React from 'react';
import './Foods.css';
const Foods = ({food}) => {
    const {name,id,image,price} = food;
    return (
        <div className='food-card'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>Price: {price} BDT</p>
            <button className='btn'>Add To Cart</button>
        </div>
    );
};

export default Foods;