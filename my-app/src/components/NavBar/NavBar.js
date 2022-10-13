import './NavBar.css'
import CategoryButton from './CategoryButton/CategoryButton'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    return(
      <div>
        <div>
          <h1>Tecnobsoleto</h1>
          <CategoryButton value="Celulares"/>
          <CategoryButton value="Reproductores de MP3"/>
          <CategoryButton value="Agendas Electronicas"/>
        </div>
        <div className='cart-icon'>
          <CartWidget/>
        </div>
      </div>       
)}

export default NavBar