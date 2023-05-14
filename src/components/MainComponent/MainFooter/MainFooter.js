import React from 'react';
import './MainFooterStyle.css';

const MainFooter = () => {
    return(
        <footer className='TheFooter p-3'>
            <div className='SocialMediaIcons'>
                <div className='row'>
                    <div className='col d-flex justify-content-center'>
                        <a href='#'>
                            <img src='#' alt='#'/>
                        </a>
                    </div>
                    <div className='col d-flex justify-content-center'></div>
                    <div className='col d-flex justify-content-center'></div>
                    <div className='col d-flex justify-content-center'></div>
                </div>
            </div>
            <div className='CopyrightText d-flex justify-content-center'>
            © 2023 Tropicana Getaway All Rights Reserved.
            </div>
        </footer>
    );
};

export default MainFooter;