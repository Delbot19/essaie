import React from 'react'
import { plantList } from '../Datas/PlantLists'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const categories = plantList.reduce((elem, plant) => elem.includes(plant.category) ? elem : elem.concat(plant.category), [])

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='plant-item'>
                        {plant.name}
                        {plant.isSpecialOffer && <div className='sales'>promo</div>}
                        {plant.isBestSale && <span>🔥</span>}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ShoppingList