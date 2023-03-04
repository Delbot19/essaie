import React from 'react'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ name, cover, id, light, water }) {

    return (
        <li key={id} className='plant-item'>
            <img className='plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem