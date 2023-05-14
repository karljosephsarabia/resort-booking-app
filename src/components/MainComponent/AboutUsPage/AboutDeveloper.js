import React from 'react';
import Ryan from './images/cutedog.png';
import Karl from './images/sleepy cat.png';
import Ierie from './images/Smart Owl.png';
import Gesila from './images/Huggable Penguin.png';
import './About.css'



function Developer() {

    return (
      <div className='d-flex justify-content-center '>
      <div className='row d-flex justify-content-center my-5 container'>
        <div className='col'>
          <div className="card aboutuscard">
            <div className="card-body">
              <img className='card-img-top' src={Karl} alt='Karl the Sleepy Cat'/>
              <h5 className="card-title d-flex fw-bold justify-content-center py-2">
                Karl Joseph Sarabia II
              </h5>
              <p className="card-text d-flex justify-content-center text-center">
                The Developer, The Mastermind, The Reason Why We're Using Cute Animal Avatars Instead
              </p>
            </div>
          </div>
        </div>

        <div className='col'>
          <div className="card aboutuscard">
              <div className="card-body">
                <img className='card-img-top' src={Ryan} alt='Ryan The Puppy'/>
                <h5 className="card-title d-flex fw-bold justify-content-center py-2">
                  Ryan Carl Araneta
                </h5>
                <p className="card-text d-flex justify-content-center text-center">
                  Developer #2, Na-Stress Sa Back-End, The Dog-Lover
                </p>
              </div>
            </div>
        </div>

        <div className='col'>
          <div className="card aboutuscard">
              <div className="card-body">
                <img className='card-img-top' src={Ierie} alt='Ierie The Night Owl'/>
                <h5 className="card-title d-flex fw-bold justify-content-center py-2">
                  Ierie Marie Manguit
                </h5>
                <p className="card-text d-flex justify-content-center text-center">
                  The Writer of Words and Codes, The Second Opinion, Wants the Cat Avatar But Nagparaya Nalang
                </p>
              </div>
            </div>
        </div>

        <div className='col'>
          <div className="card aboutuscard">
              <div className="card-body">
                <img className='card-img-top' src={Gesila} alt='Gesila The Huggable Penguin'/>
                <h5 className="card-title d-flex fw-bold justify-content-center py-2">
                  Gesila Lobiano
                </h5>
                <p className="card-text d-flex justify-content-center text-center">
                  The Other Developer, The Mother, She's Just Happy To Be Here
                </p>
              </div>
            </div>
        </div>


      </div>
      </div>
    )
};
export default Developer;