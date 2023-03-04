import { useState } from 'react';
import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

function App() {
  const [cart,updateCart]=useState([])
  return (
    <div className="App">
      <Banner/>
      <div className='layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart}  />
			</div>
      <Footer/>
    </div>
  );
}

export default App;
