import React from 'react'
import Victor from './images/about1.jpg'
import './About.css'


function Developer() {
    return (
        <>
            <div class="dev-container">
                <div id='dev-intro'>
                    <h1>ABOUT US</h1>
                </div>
                <div >
                    <div class="lg-12 " id='about-content'>
                        <p>Welcome to our booking app! We are a team of
                            passionate developers who strive to make your booking experience
                            as easy and convenient as possible.
                            Our app was designed with the user in mind, taking into consideration the different
                            needs and preferences of our diverse user base. We understand that everyone's schedule is different,
                            which is why our app offers flexible
                            booking options that allow you to easily make reservations at your own convenience.
                        </p>
                        <img src={Victor} alt="resorts" id='about-photo' />
                    </div>
                </div>
            </div>
        </>
    )
};
export default Developer;