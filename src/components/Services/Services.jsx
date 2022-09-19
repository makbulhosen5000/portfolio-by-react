import React from 'react'
import './Services.css';
import headEmoji from './../../assets/img/heartemoji.png';
import Resume from './../../assets/resume/cv.pdf';
import Card from '../Card/Card';



function Services() {
  return (
    <div className='services'>
          {/* left side */}
         <div className='awesome'>
           <span>My Awesome</span>
           <span>Services</span>
           <span>I have successfully designed, developed, and delivered a multitude of websites
            <br/> 
            and web applications with complex front and back ends; from typical  HTML/             
            <br/>
           CSS/Bootstrap/PHP/Laravel/JavaScript/ReactJs/Rest API/MYSQL Server.
            <br/>
            I would love to help you achieve your objectives; simple or complex!</span>
            <a href={Resume} download><button className='button s-button'>Download Resume</button></a>
           <div className='blur s-blur1' style={{ background:"#ABF1FF94" }}></div>
         </div>
          {/* right side */}
          <div className='cards'>
               {/* card 1st */}
              <div style={{ top:"0.5rem",left:"8rem" }}>
                  <Card 
                  emoji = {headEmoji}
                  heading = {'WEB DESIGN SKILLS'}
                  details = {"HTML, CSS, BOOTSTRAP, TAILWIND CSS"}
                  />
              </div>
                {/* card 2nd */}
              <div style={{ top:"11rem",left:"-12rem" }}>
                  <Card 
                  emoji = {headEmoji}
                  heading = {'PROGRAMMING LANGUAGE SKILLS'}
                  details = {"PHP, JAVASCRIPT, JAVA, PYTHON"}
                  />
              </div>
                 {/* card 3rd */}
              <div style={{ top:"20rem",left:"8rem" }}>
                  <Card 
                  emoji = {headEmoji}
                  heading = {'WEB DEVELOPMENT SKILLS'}
                  details = {"LARAVEL, REACT, MYSQL, JSON,AJAX"}
                  />
              </div>
              <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

            </div>
    </div>
  )
}

export default Services