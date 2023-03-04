import React from 'react'
import { useState } from 'react';
import '../styles/Cart.css'
function Cart() {

  const monsteraPrice = 8
  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(true)
  function acheter() {
    updateCart(cart + 1);
  }
  return isOpen ? (
    <div className='cart'>
      <button className='cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
      <h2>Panier</h2>
      <div>
        Monstera : {monsteraPrice}€
        <button className='cart-add-button' onClick={() => acheter()}>
          Ajouter
        </button>
      </div>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <button onClick={() => updateCart(0)}>Vider le panier</button>
    </div>
  ) : (
    <div className='cart-closed'>
      <button className='cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    </div>
  )

}

export default Cart