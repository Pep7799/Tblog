import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../images/pic1.png'
import pic3 from '../images/pic3.png'

export default function Header() {
  return (
    <div>
    
        <nav className='navbar'>

            <div className='logo'>
               <Link to="/">
                <div className='logos'>
                    <div className='left'>
                      <img className='picone' src={pic1} alt="" />
                      
                    </div>
                    <div className='right'>
                      <h2>TOSIN   <span>   Writ<img className='pictwo' src={pic3} alt="" />ngs</span></h2>
                    </div>
                   </div>
               </Link>
            </div>

           
                <ul className='ul1'>
                    <li className='li1'><Link to = '/'>About Me</Link></li>
                    <li className='li1'><Link to = '/writeups'>Writeups</Link></li>
                    <li className='li1'><Link to = '/contact'>Contact</Link></li>
                    
                </ul>
               
            </nav>
            <hr />
            </div>
           

    
  )
}
