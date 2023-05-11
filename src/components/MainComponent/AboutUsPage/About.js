import React from 'react';
import AboutUsTitle from './AboutUsTitle';
import OurStoryContent from './OurStoryContent';
import Developer from './AboutDeveloper';



export default function About() {
  return (
    <>
    <div id='about-container'>
      <AboutUsTitle />
      <OurStoryContent />
     <Developer/>
    </div> 
    </>
  )
};
