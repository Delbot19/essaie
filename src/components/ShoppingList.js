import React from 'react'
import { plantList } from '../Datas/PlantLists'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList({ cart, updateCart }) {
    const categories = plantList.reduce((elem, plant) => elem.includes(plant.category) ? elem : elem.concat(plant.category), [])

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>

            <ul className='plant-list'>
				{plantList.map(({ id, cover, name, water, light , price}) => (
                    <div>
                        <PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
                    <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
					
				))}
			</ul>
        </div>
    )
}

export default ShoppingList