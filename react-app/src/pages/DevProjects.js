import React from 'react';
import sourceCode from '../img/projects/basic-source-code.jpg';
import cairn from '../img/projects/cairn-new.PNG';
import passwordGen from '../img/projects/password gen.png';
import quiz from '../img/projects/quiz.PNG';
import schedule from '../img/projects/sched.PNG';
import teamGen from '../img/projects/team-gen.png';
import weather from '../img/projects/weather-new.PNG'
import remindr from '../img/projects/remindr logo.png';

export default function DevProjects() {
  
  return (
    <div>
      <h1 className='projects-title'>PROJECTS</h1>
      <div className='projects'>

        <div className='cairn project'>
          <img src={cairn} alt="Cairn" className="cairn-pic"/>
          <p className='project-text'>This application was inspired by the want to explore the US and all of its National Parks for camps, fishing, or simply just to visit and explore the history. We wanted the user to be able to view National Parks by state and be provided the current weather for exploration.</p>
          <div className="project-footer">
            <a href="https://technoprep.github.io/cairn/" className="project-footer-item button">Live Site</a>
            <a href="https://github.com/TechnoPrep/cairn" className="project-footer-item git-btn"><i className="fab fa-github-square fa-4x" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className='remindr project'>
          <img src={remindr} alt="Remindr" className="remindr-pic"/>
          <p className='project-text'>A reminder application that allows you to create an account to make and save alert notifications to be sent out to your email. The app is easy to use and features customizable options for your account page.</p>
          <div className="project-footer">
            <a href="https://remindr-notification.herokuapp.com/" className="project-footer-item button">Live Site</a>
            <a href="https://github.com/LoopySquare/Remindr" className="project-footer-item git-btn"><i className="fab fa-github-square fa-4x" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className='source-project project'>
          <img src={sourceCode} alt="Node" className="node-pic"/>
          <p className='project-text'>This is a command-line powered application made to manage a company's employee database, using Node.js, Inquirer, and MySQL. This app serves as a content management system to allow anyone to enter new, or update previous employee information.</p>
          <div className="project-footer">
            <a href="https://github.com/LoopySquare/Homework-12" className="project-footer-item git-btn"><i className="fab fa-github-square fa-4x" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className='team-gen project'>
          <img src={teamGen} alt="Team-Gen" className="team-gen-pic"/>
          <p className='project-text'>This is a command-line powered app that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.</p>
          <div className="project-footer">
            <a href="https://github.com/LoopySquare/HW10" className="project-footer-item git-btn"><i className="fab fa-github-square fa-4x" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className='weather project'>
          <img src={weather} alt="Weather" className="weather-pic"/>
          <p className='project-text'>A simple weather application that allows the user to search for any city in the world, and have the current and future weather forecast returned to them. The user will see the conditions for the temperature, humidtiy, wind speed, and UV index.</p>
          <div className="project-footer">
            <a href="https://loopysquare.github.io/Homework-6/" className="project-footer-item button">Live Site</a>
            <a href="https://github.com/LoopySquare/Homework-6" className="project-footer-item git-btn"><i className="fab fa-github-square fa-4x" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className='schedule project'>
          <img src={schedule} alt="Schedule" className="schedule-pic"/>
          <p className='project-text'>This site allows the user to easily plan their day. The time blocks are updated with color to represent past, present and future events. Each time block has an input area and save button. Once the save button is pressed, the entered information will be saved to local storage for that respective time block.</p>
          <div className="project-footer">
            <a href="https://loopysquare.github.io/Homework-5/" className="project-footer-item button">Live Site</a>
            <a href="https://github.com/LoopySquare/Homework-5" className="project-footer-item git-btn"><i className="fab fa-github-square fa-4x" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className='quiz project'>
          <img src={quiz} alt="Quiz" className="quiz-pic"/>
          <p className='project-text'>A JavaScript quiz, featuring 10 random questions. Once you start the game, you will have 75 seconds to complete the quiz. Every question answered incorrectly will decrease your time by 10 seconds. If your time reaches 0, the quiz is over. Your score is equal to your time remaining.</p>
          <div className="project-footer">
            <a href="https://loopysquare.github.io/Homework-4/" className="project-footer-item button">Live Site</a>
            <a href="https://github.com/LoopySquare/Homework-4" className="project-footer-item git-btn"><i className="fab fa-github-square fa-4x" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className='password-gen project'>
          <img src={passwordGen} alt="Password" className="password-pic"/>
          <p className='project-text'>This application is a basic password generator. The user will be presented with several options for what they would like to include in their password. These options include, upper or lower case letters, numbers, special characters, and length of password.</p>
          <div className="project-footer">
            <a href="https://loopysquare.github.io/Homework-3/" className="project-footer-item button">Live Site</a>
            <a href="https://github.com/LoopySquare/Homework-3" className="project-footer-item git-btn"><i className="fab fa-github-square fa-4x" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
