import React from 'react'
import './header.css'
import CTA from './CTA'
import JC from '../../assets/JC.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h5 className='header_welcome'>Welcome to </h5>
                <h1 className='header_welcome'>Javis Carr's Portfolio</h1>
                <h5 className='text-light header_welcome'>Fullstack Web Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className='jc'>
                    <img src={JC} alt="Javis" />
                </div>

                <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header