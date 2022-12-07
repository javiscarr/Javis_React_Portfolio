import React from 'react'
import CV from '../../assets/Resume2022.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} target="_blank" rel='noreferrer' className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
    )
}

export default CTA