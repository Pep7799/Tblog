import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../images/pic1.png'
import pic3 from '../images/pic3.png'
import {FaTimesCircle} from 'react-icons/fa'
import {CgMenuGridR} from 'react-icons/cg'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Header() {

  const {pathname} = useLocation();

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
                      <h2>TOSIN   <span> Writ<img className='pictwo' src={pic3} alt="" /><span className='span2'>ngs</span></span></h2>
                    </div>
                   </div>
              
            </div>

            
               <div className='close' onClick={handleClick}>
                    {click ? (<FaTimesCircle size={20} style={{ color: '#B2AD4D' }} />)
                        : (<CgMenuGridR size={20} style={{ color: '#000' }} />)}

                </div>

            

           
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='each-item'><Link to = '/'  onClick={closeMenu}>About Me</Link>
                    <Line 
                      transition = {{duration: 0.75}} 
                      initial = {{width: "0%"}} 
                      animate = {{width: pathname === '/' ? '50%': '0%'}}/>
                    </li>
                    <li className='each-item'><Link to = '/writeups'  onClick={closeMenu}>Writeups</Link>
                     <Line 
                      transition = {{duration: 0.75}} 
                      initial = {{width: "0%"}} 
                      animate = {{width: pathname === '/writeups' ? '50%': '0%'}}/></li>
                    <li className='each-item'><Link to = '/contact'  onClick={closeMenu}>Contact</Link> <Line 
                    transition = {{duration: 0.75}} 
                    initial = {{width: "0%"}} 
                    animate = {{width: pathname === '/contact' ? '50%': '0%'}}/></li>
                    
                </ul>
               
            </nav>
            <hr />
            </div>
           

    
  )
}


const Line = styled(motion.div) `
    height: 0.2rem;
    background: #9BD8F3;
    position:absolute;
    width: 0%;
    border-bottom: 3px solid #B2AD4D;
    left: 40%;
    margin-bottom:12px;
    

`