import React from 'react'
import CareScale from './CareScale'
import '../styles/PlantItem.css'
import monstera from '../assets/monstera.jpg'

function PlantItem({name,cover,id,light,water}) {
  return (
    <li key={id} className='plant-item'>
			<img className='plant-item-cover' src={monstera} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
  )
}

export default PlantItem