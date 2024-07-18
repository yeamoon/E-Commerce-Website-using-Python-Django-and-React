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
            <div className='card__left'>
              <img className='card__photo' src={props.photo_main} alt='Item' />
            </div>
            <div className='card__right'>
              <h3 className='card__title'>{props.title}</h3>
              <p className='card__info card__price'>Price: ${numberWithCommas(props.price)}</p>
              <p className='card__info card__price'>Discount Price: ${numberWithCommas(props.discount_price)}</p>
              <p className='card__info'>Description: {props.description}</p>
            </div>
          </div>
        );
      };
      
      Card.propTypes = {
        title: PropTypes.string.isRequired,
        photo_main: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discount_price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      };
      
      export default Card;