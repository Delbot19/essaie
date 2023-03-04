import React from 'react'
import '../styles/Banner.css'
import feuille from '../assets/feuille.png'

function Banner() {
    let text ='La maison jungle ',emoji='🤑🤑🤑';
  return (
    <div className='Banner'>
    <img src={feuille} alt="La maison jungle" className='logo' />
      <h1 className='title'> {text.toUpperCase() + emoji}</h1>
    </div>

  )
}

export default Banner