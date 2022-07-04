import React from 'react';
import './RandomFood.css';

const RandomFood = ({random}) => {
    // console.log(random);
    const {name,image} = random;
    return (
        <div className='random-food'>
            <img src={image} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default RandomFood;