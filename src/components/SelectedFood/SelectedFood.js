import { faRemove} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedFood.css';


const SelectedFood = ({food}) => {
    const {image,name} = food;

    return (
        <div className='selected-food'>
            <div className="food-content">
                <div className="image-area">
                    <img src={image} alt="" />
                </div>
                <p>{name}</p>
            </div>
            <p className='remove-icon'><FontAwesomeIcon icon={faRemove} /></p>
        </div>
    );
};

export default SelectedFood;