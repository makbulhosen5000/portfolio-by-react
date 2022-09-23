import React from 'react'
import './Work.css';
import Upwork from './../../assets/img/Upwork.png';
import Fiverr from './../../assets/img/fiverr.png';
import Amazon from './../../assets/img/amazon.png';
import Shopify from './../../assets/img/Shopify.png';
import Facebook from './../../assets/img/Facebook.png';
// import {motion} from 'framer-motion';



function Works() {
  return (
    <div className='works'>
         {/* left side */}
         <div className='awesome'>
           <span>Works For All These</span>
           <span>Brands & Clients</span>
           <span>I am a passionate programmer.I would love to develop your application.
            <br/> 
            I have experienced in developing web applications including frontend & backend.             
            <br/>
           And highly interested to work in local/International job market.
          <br/>
            And also want to work in freelancing market place.
            <br/>
            I would love to help you, achieve your simple & complex objectives.</span>
            <a href="s" download><button className='button s-button'>Download Resume</button></a>
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