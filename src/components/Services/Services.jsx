import React from 'react'
import './Services.css';
import headEmoji from './../../assets/img/heartemoji.png';
import Resume from './../../assets/resume/cv.pdf';
import Card from '../Card/Card';



function Services() {
  return (
    <div className='services' id="Services">
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
            I would love to help you achieve your objectives; simple or complex!
            <br/>
            <br/>
            I am well organized  person,problem solver, independent employee with hight attention to detail.
            <br/>
           
            I would be interested to learning in the new frontend & backend technologies.
            <br/>
            <br/>
            The sheer joy of making things. Programming is fundamentally about creating solutions to problems.
            <br/>
             At the end of the day, you have created something that didn’t exist that morning,
             <br/>
              and that is in and of itself satisfying.
            <br/>
            <br/>
            The fascination of fashioning complex puzzle-like objects of interlocking moving 
            <br/>
            parts,and watching them work in subtle cycles, playing out the consequences of
            <br/>
            principles built in from the beginning. Very well put. Not only do programs have
            <br/>
            complex structure and dependencies, there is also the dynamics of the
            <br/>
            interaction between the parts as the program executes. The ultimate puzzle indeed!
            <br/>
            <br/>
            The joy of always learning, which springs from the nonrepeating nature of the 
            <br/>
            Task.While constructing the program you constantly expand your understanding
            <br/>
             of both the problem and the solution. In addition, there is almost no limit 
            <br/>
            to what you can learn to improve your craft – languages, algorithms, methodology,
            <br/>
            tools, frameworks.
            </span>
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
              <div style={{ top:"20rem",left:"-7rem" }}>
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