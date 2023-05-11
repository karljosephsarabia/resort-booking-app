import React from 'react';

const SocialMediaSidebar = () => {
    return (
      <div className="social-media-sidebar">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    );
  };
  
  export default SocialMediaSidebar;
  