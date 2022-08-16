import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header className='header'>
        <nav className='navbar'>

            <div className='logo'>
               <Link to="/">Tosin's writings</Link>
            </div>

           
                <ul className='ul1'>
                    <li className='li1'><Link to = '/'>About Me</Link></li>
                    <li className='li1'><Link to = '/writeups'>Writeups</Link></li>
                    <li className='li1'><Link to = '/contact'>Contact</Link></li>
                    
                </ul>
            </nav>

        </header>
    </>
  )
}
