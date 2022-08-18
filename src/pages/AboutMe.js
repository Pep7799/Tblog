import React from 'react'
import { Link } from 'react-router-dom'
import picone from '../images/picone.png'
import pictwo from '../images/pictwo.png'
import {GiOpenBook} from 'react-icons/gi' 
import {BsAwardFill} from 'react-icons/bs'

export default function AboutMe() {
  return (
    <section className='aboutme'>
      <div className='firstpart'>
        <div className='one'>
          <h1 className='intro'>  THE <br /> <span className='justspan'> ULTIMATE </span> WRITEUP FROM 
          <br /> FOLAMI OLUWATOSIN </h1>
          <ul className='ul2'>
            <li className='li2'>Poems</li>
            <li className='li2'>Short stories</li>
            <li className='li2'>Quotes</li>
            <li className='li2'>Stories</li>
          </ul>
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
          <img src={pictwo} className= "bgimg" alt="animated" />
          <p className='text'>Services I offer</p>
          <div className='text2'>
           
            <p>  <GiOpenBook style={{color: '#B2AD4D', fontSize: '25px'}}/> Proofreading and Editing </p><h5>We edit, proofread and sort your works or writings</h5>
            <br />
            <br />
            <br />
            <p> <BsAwardFill style={{color: '#B2AD4D', fontSize: '25px'}}/> Original content </p> <h5>Get your poems and stories with 0% plagiarism</h5>
          </div>
        </div>

        
      </div>

    </section>
  )
}
