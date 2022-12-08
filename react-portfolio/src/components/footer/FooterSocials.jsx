import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const FooterSocials = () => {
  return (
    <div className='footer_socials'>
        <a href="www.linkedin.com/in/javis-carr" target="_blank" rel="noreferrer"><BsLinkedin/></a> 
        <a href="https://github.com/javiscarr" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>
  )
}

export default FooterSocials