import React from 'react'
import './Work.css';
import Upwork from './../../assets/img/Upwork.png';
import Fiverr from './../../assets/img/fiverr.png';
import Amazon from './../../assets/img/amazon.png';
import Shopify from './../../assets/img/Shopify.png';
import Facebook from './../../assets/img/Facebook.png';




function Works() {
  return (
    <div className='works'>
         {/* left side */}
         <div className='awesome'>
           <span>Works For All These</span>
           <span>Brands & Clients</span>
           <span>I have successfully designed, developed, and delivered a multitude of websites
            <br/> 
            and web applications with complex front and back ends; from typical  HTML/             
            <br/>
           CSS/Bootstrap/PHP/Laravel/JavaScript/ReactJs/Rest API/MYSQL Server.
            <br/>
            I would love to help you achieve your objectives; simple or complex!</span>
            <a href="s" download><button className='button s-button'>Hire Me</button></a>
           <div className='blur s-blur1' style={{ background:"#ABF1FF94" }}></div>
         </div>
         <div className='w-right'>
            <div className='w-mainCircle'>
                <div className='w-secCircle'>
                  <img src={Upwork} alt="" />
                </div>
                <div className='w-secCircle'>
                  <img src={Fiverr} alt="" />
                </div>
                <div className='w-secCircle'>
                  <img src={Amazon} alt="" />
                </div>
                <div className='w-secCircle'>
                  <img src={Shopify} alt="" />
                </div>
                <div className='w-secCircle'>
                  <img src={Facebook} alt="" />
                </div>
                {/* background Circle */}
                {/* <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div> */}
            </div>
         </div>
    </div>
  )
}

export default Works