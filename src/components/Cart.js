import React from 'react'
import { useState } from 'react';
import '../styles/Cart.css'
function Cart({ cart, updateCart }) {


  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)
  return isOpen ? (
    <div className='cart'>
      <button className='cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
      <h2>Panier</h2>
      {
        cart.map(({ name, price, amount }, index) => (
          <div key={`${name}-${index}`}>
            {name} {price}€ * {amount}
          </div>
        ))
      }
      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div className='cart-closed'>
      <button className='cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    </div>
  )

}

export default Cart