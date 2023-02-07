import React from 'react';
import Card from './Card';

import ty from '../imgs/illustration-thank-you.svg';

import './Thanks.css';

const Thanks = ({ rating }) => {
  return (
    <Card>
      <div className="thankyou-image">
        <img src={ty} alt="Thank you" />
      </div>
      <div className="selected">
        <p>You selected {rating} out of 5</p>
      </div>
      <h2 className='title'>Thank you!</h2>
      <p className='text'>
        We appreciate you taking the time to give a rating. 
        If you ever need more support, don’t hesitate to get in touch!
      </p>
    </Card>
  )
}

export default Thanks