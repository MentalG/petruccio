import React from 'react'

//styles
import './navbar.css'

//materials
import logo from '../../materials/images/logo.png'
import cart from '../../materials/images/cart.png'
import menu from '../../materials/images/menu.svg'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className='navbar-menu'>
                <img src={menu} alt="menu"/>
                <div>Menu</div>
            </div>
            <div className='navbar-image' style={{ backgroundImage: `url(${logo})` }}/>
            <div className='navbar-cart' >
                <img src={cart} alt={'cart'}/>
                <div>{`Cart (${0})`}</div>
                <div>Login</div>
            </div>
        </div>
    )
}

export default Navbar