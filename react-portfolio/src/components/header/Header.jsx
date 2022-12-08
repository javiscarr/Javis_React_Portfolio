import React from 'react'
import './header.css'
import CTA from './CTA'
import JC from '../../assets/JC.png'
import Nav from '../nav/Nav'

const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h1 className='header_welcome'>Javis Carr</h1>
                <h5 className='text-light header_welcome'>Software Developer</h5>
                <CTA />
               
                <div className='jc'>
                    <img src={JC} alt="Javis" />
                </div>

                <Nav/>
            </div>
        </header>
    )
}

export default Header