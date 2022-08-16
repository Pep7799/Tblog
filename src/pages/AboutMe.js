import React from 'react'
import { Link } from 'react-router-dom'
import picone from '../images/picone.jpg'
import pictwo from '../images/pictwo.jpg'

export default function AboutMe() {
  return (
    <section className='aboutme'>
      <div className='firstpart'>
        <div className='one'>
          <h1>Hi! <br /> I am <span className='justspan'> Tosin </span><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, similique.</h1>
           <div className='btn'>
            <Link to = '/writeups'> <button> Jump to my writeups </button></Link>
           </div>
        </div>

        <div className='picture'>
          <img src={picone} width= '500' height='500' alt="mine" />
        </div>
      </div>

      <div className='secondpart'>

        <div className='imgpart'>
          <img src={pictwo} width= '400' height='450' alt="animated" />
        </div>

        <div className='reasons'>
          <p>My latest writings</p>
          <ul>
            <li>Hello <br />Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
            <li>Hello <br />Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
            <li>Hello <br />Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
          </ul>
        </div>

      </div>

    </section>
  )
}
