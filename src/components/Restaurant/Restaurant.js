import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import './Restaurant.css';
const Restaurant = () => {
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    // console.log(foods);
    return (
        <div className='foods'>
            <div className="foods-container">

                {
                    foods.map(food => <Foods
                        food={food}
                        keys={food.id}
                        ></Foods>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected Food</h2>
            </div>
        </div>
    );
};

export default Restaurant;