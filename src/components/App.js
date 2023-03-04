import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

function App() {
  return (
    <div className="App">
      <Banner/>
      <div className='layout-inner'>
				<Cart />
				<ShoppingList />
			</div>
      <Footer/>
    </div>
  );
}

export default App;
