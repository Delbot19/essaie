import React from 'react'
import { plantList } from '../Datas/PlantLists'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import PlantItem from './PlantItem'

function ShoppingList({ cart, updateCart }) {
    
    function addToCart(name,price){
        const currentPlantSaved= cart.reduce((find,plant)=>plant.name===name ? plant: find,{})
        if(Object.keys(currentPlantSaved).length){
            const cartFilteredCurrentPlant=cart.filter(elem=>elem.name!==name)
            updateCart([...cartFilteredCurrentPlant,{name,price,amount:currentPlantSaved.amount+1}])
        }
        else {
            updateCart([...cart, {name, amount: 1, price}])
        }
    }



    return (
        <div>
            <Categories />

            <ul className='plant-list'>
				{plantList.map(({ id, cover, name, water, light , price}, idx) => (
                    <div>
                        <PlantItem
                        key={id + idx}
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
                        price={price}
					/>
                    <button onClick={() => addToCart(name,price)}>Ajouter</button>
                    </div>
					
				))}
			</ul>
        </div>
    )
}

export default ShoppingList