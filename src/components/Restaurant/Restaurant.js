import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Foods from '../Foods/Foods';
import './Restaurant.css';
const Restaurant = () => {
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    const addToCart = (id) =>{
        console.log(id);
    }

    // console.log(foods);
    return (
        <div className='foods'>
            <div className="foods-container">

                {
                    foods.map(food => <Foods
                        food={food}
                        keys={food.id}
                        addToCart={addToCart}
                        ></Foods>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Restaurant;