import React from 'react'
// import logo from './../../assets/img/logo.png';
import {Link} from 'react-scroll';
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
                <Link spy={true} to ="Navbar" smooth={true} activeClass='activeClass'>
                <li className='mylist'><a class="active" href="#df">Home</a></li>
                </Link>
                <Link spy={true} to ="Services" smooth={true}>
                <li className='mylist'><a href="#abo">Services</a></li>
                </Link>
                <Link spy={true} to ="Experiences" smooth={true}>
                <li className='mylist'><a href="#abo">Experiences</a></li>
                </Link>
                <Link spy={true} to ="Portfolio" smooth={true} >
                <li className='mylist'><a href="#abo">Portfolio</a></li>
                </Link>
                <Link spy={true} to ="Contact" smooth={true}>
                <li className='mylist'><a href="#abo">Contact</a></li>
                </Link>
                </ul>

             </div>
   
       
    </div>
  )
}

export default Navbar