import React from 'react'
import './Navbar.css'
import Logo from './assets/trollface.png'

export default function Navbar(){
    return (
        <nav className='nav--container linear'>
            <div className='nav--logo'>
                <img src={Logo} className='nav--image' alt='Logo' />
                <h1 className='nav--logo--text'>Meme Generator</h1>
            </div>
            <h3 className='nav--project-name'>React Course - Project 3</h3>
        </nav>
    )
}