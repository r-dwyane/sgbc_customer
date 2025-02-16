import React from 'react'
import { Link } from 'react-router-dom';
import './M.css';
function Menu() {
  return (
    <>
      <header className='menu-header'>
          <div className="nav-container">
            <h1 className='business-name'>Samgyeop Grill Box - Cebu</h1>
            <nav>
              <ul className='nav-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </div>
          <hr />
          <h1 className='menu-now-title'>Our Menu</h1>
          <h2>Delicious Korean BBQ Selections, Fresh & Ready to Grill!</h2>
        </header>
        <div className="menu-container-1">

        </div>
      </>
  )
}

export default Menu
