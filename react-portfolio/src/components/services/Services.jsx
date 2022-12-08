import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2> Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Professionally trained to create clean, beautiful, and user-centered designs.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Great with wireframes and working in a team environment.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Expert knowledge of CSS.</p>
            </li>

            

          </ul>
        </article>

          {/* End of UI/UX */}
          <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Knowledgeable in both Backend and Frontend coding.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Georgia Tech Certified Coder.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>20+ repositories on GitHub.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Creative with prototypes and conducting research to test designs.</p>
            </li>


          </ul>
        </article>

          {/* End of web development */}

          <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Over a decade of experience crafting innovative copy.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Comfortable presenting to large and small groups.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Personanable and innovative.</p>
            </li>

          </ul>
        </article>

          {/* End of content creation */}

      </div>
    </section>
  )
}

export default Services