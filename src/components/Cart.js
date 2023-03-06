import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/Cart.css'
function Cart({ cart, updateCart }) {
  const pain = 'avocat'

  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)
  useEffect(() => {
    alert(`J'aurai ${total}€ à payer 💸`)
})
  return isOpen ? (
    <div className='cart'>
      <button className='cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
      <h2>Panier</h2>
      {
        cart.map((plantType, index) => (
          <div key={`${plantType.name}-${index}`}>
            {plantType.name} {plantType.price}€ * {plantType.amount}
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