import React from 'react';
import './Header.css';
import image from './images/illustration-hero.svg'

const Header = () => {
  return (
    <div className='HeroDiv'>
        <img className='Hero' src={image} alt='' />
    </div>
  )
}

export default Header 
