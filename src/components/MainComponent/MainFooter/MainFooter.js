import React from 'react';
import './MainFooterStyle.css';
import Facebook from './images/facebook.png';
import Instagram from './images/instagram.png';
import Tiktok from './images/tiktok.png';
import Twitter from './images/twitter.png';
import YouTube from './images/youtube.png';

const MainFooter = () => {
    return(
        <footer className='TheFooter p-3'>
            <div>
                <p className='ctafooter lead d-flex justify-content-center fw-bold'>Follow Us For More Destinations</p>
            </div>
            <div className='SocialMediaIcons'>
                    <div className='d-flex justify-content-center'>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                            <img className='smicon m-3' src={Facebook} alt='Facebook'/>
                        </a>

                        <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                            <img className='smicon m-3' src={Instagram} alt='Instagram'/>
                        </a>

                        <a href='https://www.tiktok.com/' target='_blank' rel="noreferrer">
                            <img className='smicon m-3' src={Tiktok} alt='ITiktok'/>
                        </a>

                        <a href='https://twitter.com/' target='_blank' rel="noreferrer">
                            <img className='smicon m-3' src={Twitter} alt='Twitter'/>
                        </a>

                        <a href='https://youtube.com/' target='_blank' rel="noreferrer">
                            <img className='smicon m-3' src={YouTube} alt='YouTube'/>
                        </a>
                    </div>
            </div>
            <div className='CopyrightText d-flex justify-content-center mt-3'>
            © 2023 Tropicana Getaway All Rights Reserved.
            </div>
        </footer>
    );
};

export default MainFooter;