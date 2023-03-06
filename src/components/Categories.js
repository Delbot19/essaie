import React from 'react'
import '../styles/Categories.css'
import { plantList } from '../Datas/PlantLists'


function Categories({categorie,setCategories}) {

    const categories = plantList.reduce((elem, plant) => elem.includes(plant.category) ? elem : elem.concat(plant.category), [])


    return (
        <div className='categories'>
            <select className='categories-select' value={categorie} onChange={(e) => setCategories(e.target.value)}>
            <option key={"no cat"} value="all">All</option>
                {categories.map(elem => (
                    <option key={elem} value={elem}>{elem}</option>
                ))}
                    
            </select>
            <button onClick={()=>setCategories('all')}>Reinitialiser</button>
        </div>
    )
}

export default Categories