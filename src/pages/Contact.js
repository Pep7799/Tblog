import React from 'react'
import email from '../images/email.jpg'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.jpg'

export default function Contact() {
  return (
    <section className='contact'>
      <div className='justtext'>
        <h1>Want to get in touch with me?</h1>
      </div>
      
      <div className='contactform'>
        <form action="https://formspree.io/f/xlevdwob" method="POST">
        <input name="email" type="email" className='emailpart emailinput' placeholder='Your email' />
        <textarea name="message" type= 'text' placeholder='Your message' className='emailpart textpart' id="">

        </textarea>
        <button type='submit' className='contactsubmit'>Send</button>
        </form>
    </div>



    <div className='contacticons'>
      <a href="https://instagram.com/folamiiii?igshid=YmMyMTA2M2Y=" target = '_blank'>
        <img className='icon' src={instagram} width = '40' height= '40' alt="" />
      </a>
      <a href="https://twitter.com/Adetofe?t=j0GWrLnIm2WnlReceDRyTw&s=09" target = '_blank'>
        <img className='icon' src={twitter} width = '30' height= '30' alt="" />
      </a>
     
      <div className='emailclass'>
         <img src={email} className= 'emailimage' width = '30' height= '30' alt="" />
        <div className='emailtext'>
          <p>folamioluwatosin5@gmail.com</p>
        </div>
      </div>
      </div>
    </section>
  )
}
