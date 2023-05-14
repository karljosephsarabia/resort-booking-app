import React from 'react';
import AboutUsTitle from './AboutUsTitle';
import OurStoryContent from './OurStoryContent';
import Developer from './AboutDeveloper';
import TheTeamHeading from './TheTeamHeading';
import MainFooter from '../MainFooter/MainFooter';



export default function About() {
  return (
    <>
    <div id='about-container'>
      <AboutUsTitle />
      <OurStoryContent />
      <TheTeamHeading />
      <Developer/>
      <MainFooter />
    </div> 
    </>
  )
};
