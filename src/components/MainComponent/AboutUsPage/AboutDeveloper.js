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
                        <p>leisure destination providing a compelling mix of luxury relaxation and wellness, lively entertainment, and exciting recreational activities including captivating child-friendly facilities.
                            Guests can savour beach-side luxe within its spacious guest rooms and suites, along with enticing wining and dining options.
                        </p>
                        <img src={Victor} alt="resorts" id='about-photo' />
                    </div>
                </div>
            </div>
        </>
    )
};
export default Developer;