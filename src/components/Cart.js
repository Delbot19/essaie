import React from 'react'
import '../styles/Cart.css'
function Cart() {
    let prixMonstera=8,prixLierre=10,prixBouquet=15;
  return (
    <div className='cart'>
        <h2>Panier</h2>
        <ul>
            <li>1 Monstera {prixMonstera}$ </li>
            <li>1 Lierre {prixLierre}$</li>
            <li>1 Bouquet de fleur {prixBouquet}$ </li>
        </ul>
        <h2>Total: {prixBouquet+prixLierre+prixMonstera}$ </h2>
    </div>
  )
}

export default Cart