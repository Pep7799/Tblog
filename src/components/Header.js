import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../images/pic1.png'
import pic3 from '../images/pic3.png'
import {FaTimesCircle} from 'react-icons/fa'
import {CgMenuGridR} from 'react-icons/cg'

export default function Header() {

      const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
  return (
    <div>
    
        <nav className='navbar'>

            <div className='logo'>
             
                <div className='logos'>
                    <div className='left'>
                      <img className='picone' src={pic1} alt="" />
                      
                    </div>
                    <div className='right'>
                      <h2>TOSIN   <span> Writ<img className='pictwo' src={pic3} alt="" />ngs</span></h2>
                    </div>
                   </div>
              
            </div>

            
               <div className='close' onClick={handleClick}>
                    {click ? (<FaTimesCircle size={20} style={{ color: '#FF0000' }} />)
                        : (<CgMenuGridR size={20} style={{ color: '000' }} />)}

                </div>

            

           
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='each-item'><Link to = '/'  onClick={closeMenu}>About Me</Link></li>
                    <li className='each-item'><Link to = '/writeups'  onClick={closeMenu}>Writeups</Link></li>
                    <li className='each-item'><Link to = '/contact'  onClick={closeMenu}>Contact</Link></li>
                    
                </ul>
               
            </nav>
            <hr />
            </div>
           

    
  )
}
