import { faRemove} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedFood.css';


const SelectedFood = ({food}) => {
    const {id,image,name} = food;
    const removeItem = id =>{
        console.log(id);
    }
    return (
        <div className='selected-food'>
            <div className="food-content">
                <div className="image-area">
                    <img src={image} alt="" />
                </div>
                <p>{name}</p>
            </div>
            <p className='remove-icon' onClick={()=>removeItem(id)}><FontAwesomeIcon icon={faRemove} /></p>
        </div>
    );
};

export default SelectedFood;