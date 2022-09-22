import React from 'react'
import logo from './../../assets/img/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <div className="n-wrapper">
        {/* <div className="n-left">
            <div>
              <img src={logo} alt="" className="n-logo" />
            </div>
        </div> */}
       
             <div className="n-list">
                <ul >
                    <li className='mylist'><a class="active" href="#df">Home</a></li>
                    <li className='mylist'><a href="#nes">Services</a></li>
                    <li className='mylist'><a href="#g">Experiences</a></li>
                    <li className='mylist'><a href="#g">Portfolio</a></li>
                    <li className='mylist'><a href="#abo">Contact</a></li>
                </ul>

             </div>
   
       
    </div>
  )
}

export default Navbar