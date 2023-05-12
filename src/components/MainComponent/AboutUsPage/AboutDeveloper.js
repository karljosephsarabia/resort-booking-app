import React from 'react'
import Ryan from './images/cutedog.png';
import Karl from './images/Smart Owl.png';
import Ierie from './images/sleepy cat.png';
import Gesila from './images/Huggable Penguin.png';
import './About.css'



function Developer() {

    return (
        <div className='carousel-sizing d-flex justify-content-center m-5'>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Ryan} alt="Slide 1" />
              <div>
                <h4 className='d-flex justify-content-center fw-bold pt-3'>
                    Ryan Carl Araneta
                </h4>
                <p className='d-flex justify-content-center lead fw-bold'>Developer</p>
              </div>
            </div>

            <div className="carousel-item">
            <img src={Karl} alt="Slide 2" />
            <div>
                <h4 className='d-flex justify-content-center fw-bold pt-3'>
                    Karl Joseph Sarabia II
                </h4>
                <p className='d-flex justify-content-center lead fw-bold'>Developer</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={Ierie} alt="Slide 3" />
              <div>
                <h4 className='d-flex justify-content-center fw-bold pt-3'>
                    Ierie Marie Manguit
                </h4>
                <p className='d-flex justify-content-center lead fw-bold'>Developer</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={Gesila} alt="Slide 4" />
              <div>
                <h4 className='d-flex justify-content-center fw-bold pt-3'>
                    Gesila Lobiano
                </h4>
                <p className='d-flex justify-content-center lead fw-bold'>Developer</p>
              </div>
            </div>

          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
    // return (
    //     <>
    //         <div className='developerteamcontainer d-flex justify-content-center m-5'>
    //             <div className='developerteamheading m-3'>
    //                 <h3 className='display-6 fw-bold'>The "Exhasuted" Beach-Loving Developers</h3>
    //             </div>
    //         </div>
    //     </>
    )
};
export default Developer;