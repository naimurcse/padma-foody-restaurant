import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Foods from '../Foods/Foods';
import './Restaurant.css';
const Restaurant = () => {
    const [foods,setFoods] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    let newCart;
    const addToCart = (selectedFood) =>{
        // console.log(selectedFood);

        const exists = cart.find(food=>food.id === selectedFood.id);
        if(!exists){
            newCart = [...cart,selectedFood];
        }else{
            newCart = [...cart];
        }

        if(cart.length < 4){
            setCart(newCart);
        }else{
            alert("You can add only 4 items");
        }
        // console.log(newCart);
    }

    const [random,setRandom] =useState([])

    const getRandomFood = () =>{
        const randomIndex = Math.floor(Math.random() * cart.length);
        const item = cart[randomIndex];
        console.log(item);
        setRandom(item);
    }


    // Reset Cart
    const resetCart = () =>{
        setCart([]);
        setRandom([]);
    }

    return (
        <div className='foods'>
            <div className="foods-container">

                {
                    foods.map(food => <Foods
                        food={food}
                        key={food.id}
                        addToCart={addToCart}
                        ></Foods>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} 
                resetCart={resetCart}
                random={random}
                getRandomFood={getRandomFood}
                ></Cart>
            </div>
        </div>
    );
};

export default Restaurant;