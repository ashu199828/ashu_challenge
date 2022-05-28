import React from 'react'
import Cart from './Cart'

const Header = () => {
  console.log()
  return (
    <div>
        <div className='header'>
        <span className="material-icons">restaurant</span>
        <h2>Food's Restaurant</h2>
        <Cart/>
     </div>
     
     </div>
  )
}

export default Header