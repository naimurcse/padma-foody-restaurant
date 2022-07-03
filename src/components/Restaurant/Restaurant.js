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
        <div className='foods-container'>
            {
                foods.map(food => <Foods
                    food={food}
                    keys={food.id}
                    ></Foods>)
            }
        </div>
    );
};

export default Restaurant;