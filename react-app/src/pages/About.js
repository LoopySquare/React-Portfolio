import React from 'react';
import aboutPic from '../img/photos/about-pic.jpg'

export default function About() {
    return (
      <div className='about-me'>
        <h1 className='about-title'>ABOUT ME</h1>
        <div className='about-text-box'>
          <p className='about-text'>Hello, my name is Tommy Jobin. I am an aspiring full stack web developer and an experienced graphic designer. I am currently learning HTML, CSS, JavaScript, Node.js, MySQL, and more. As for the design side, I have several years of experience with Adobe Photoshop, Illustrator, and inDesign. When I am not working you can find me playing one of my favorite video games, going for a hike, snowboarding, or watching the Minnesota Vikings attempt to win a football game.</p>
          <img src={aboutPic} className='about-pic'></img>
        </div>
             
    
         
       
      </div>
    );
  }