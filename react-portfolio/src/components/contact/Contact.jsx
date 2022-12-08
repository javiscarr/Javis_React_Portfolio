import React from 'react'
import './contact.css'
import {MdMailOutline} from 'react-icons/md'
import {MdOutlineMessage} from 'react-icons/md'


const Contact = () => {

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* EMAIL */}
          <article className="contact__option">
            <MdMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>Javis.Carr@gmail.com</h5>
            <a href="mailto:Javis.Carr@gmail.com" target="_blank">Send a message</a>
          </article>
        {/* Messanger */}   
          <article className="contact__option">
            <MdOutlineMessage className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>sarahlabrotlientz.slack.com</h5>
            <a href="https://jmc-developer.slack.com" target="_blank">Send a message</a>
          </article>       

        </div>

        {/* End of CONTACT OPTIONS */}

        <form id='contact-form' className='form'>
        <input  type="text" name='name'  placeholder='Your Full Name' required />
        <input  type="email" name='email'  placeholder='Your Email' required />
        <input  name="message" type='textarea' rows="7" placeholder='Your Message' required></input>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
