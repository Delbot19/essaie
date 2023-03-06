import React, { useState } from 'react'
import { plantList } from '../Datas/PlantLists'

function Categories() {
    const categories = plantList.reduce((elem, plant) => elem.includes(plant.category) ? elem : elem.concat(plant.category), [])
    const [categorie,setCategories]=useState('all')

    return (
        <React.Fragment>
            <select value={categorie} onChange={(e) => setCategories(e.target.value)}>
            <option key={"no cat"} value="all">All</option>
                {categories.map(elem => (
                    <option onClick={() => console.log(categorie) } key={elem} value={elem}>{elem}</option>
                ))}
                    
            </select>
            <button>Reinitialiser</button>

        </React.Fragment>
    )
}

export default Categories