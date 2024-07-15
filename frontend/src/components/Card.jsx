import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../styles/Card.css"
const Card = (props) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className='card'>
            <h3 className='card__title'>{props.title}</h3>
            <div className='card__header'>
                <img className='card__header__photo' src={props.photo_main} alt='Dress' />
            </div>
           
            <div className='row'>
                <div className='col-2-of-3'>
                    <p className='card__info'>Price: ${numberWithCommas(props.price)}</p>
                    <p className='card__info'>Discount_Price: {props.discount_price}</p>
                    <p className='card__info'>Description: {props.description}</p>
                   
                </div>

            </div>
           
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    photo_main: PropTypes.string.isRequired,
    
    price: PropTypes.number.isRequired,
    discount_price: PropTypes.number.isRequired,
    
};

export default Card;