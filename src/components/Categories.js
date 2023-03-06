import React from 'react'
import { plantList } from '../Datas/PlantLists'

function Categories() {
    const categories = plantList.reduce((elem, plant) => elem.includes(plant.category) ? elem : elem.concat(plant.category), [])


  return (
    <select>
        {categories.map(elem=>(
            <option key={elem} value={elem}>{elem}</option>
        ))}

    </select>
  )
}

export default Categories