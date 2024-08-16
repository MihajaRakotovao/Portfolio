import React, { useEffect, useState } from 'react'
import './Header.scss' 
import { NavLink } from 'react-router-dom'
import { TiThMenu} from 'react-icons/ti'
function Header() {

  // Menu Responsive
  const [isMenu,setIsMenu] = useState(false);
  useEffect(() => {
      isMenu ?
      document.querySelector('ul').style.display= 'none' 
      :
      document.querySelector('ul').style.display = 'flex' 
  },[isMenu])

  return (
    <header className='header'>
        <nav>
            <h1>Mhj.Rk</h1>
            <ul className='item'>
              <li><NavLink to={'/'} className='nav-item'> Accueil</NavLink></li>
              <li><NavLink to={'/about'} className='nav-item'>A propos</NavLink></li>
              <li><NavLink to={'/projet'} className='nav-item'>Projets</NavLink></li>
              <li><NavLink to={'/resume'} className='nav-item'>Cv</NavLink></li>
            </ul>
            <div className='menu'>
                <TiThMenu onClick={()=> setIsMenu(!isMenu)}/>
            </div>
        </nav>
    </header>
  )
}
export default Header

