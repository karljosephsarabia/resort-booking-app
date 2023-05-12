import React from 'react';
import Ryan from './images/cutedog.png';
import Karl from './images/sleepy cat.png';
import Ierie from './images/Smart Owl.png';
import Gesila from './images/Huggable Penguin.png';
import './AboutUsCards.css';

const Card = () => {
    return (
      <div className="card">
        <div className="card-body">
            <img src={Karl} alt='Karl the Sleepy Cat'/>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Card content goes here.</p>
        </div>
      </div>
    );
  };
  
  export default Card;