import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src="https://raw.githubusercontent.com/coolShub/Enable/main/src/images/deaf.jpg"
              text='Unable to hear? No problem'
              label='Speech'
              path='/speech'
            />
            <CardItem
              src="https://raw.githubusercontent.com/coolShub/Enable/main/src/images/blind.jpg"
              text='Unable to see?Even then No Problem'
              label='caption'
              path='/caption'
            />
            <CardItem
              src="https://raw.githubusercontent.com/coolShub/Enable/main/src/images/signlang.jpg"
              text='deaf'
              label='sign'
              path='/sign'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
