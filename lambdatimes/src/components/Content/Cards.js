import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  console.log('Cards', props)
  return (
    <div className="cards-container">
    {props.cards.map((card, index) => (
      <Card card={card} key={index}/>
    ))}
      
          
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array
}
export default Cards;