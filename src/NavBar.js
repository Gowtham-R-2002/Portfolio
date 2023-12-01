import React from 'react'
import './NavBar.css'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='fixed-bottom cus'>
            <Link to = "/">
            <AwesomeButton type="primary" >Home</AwesomeButton>
            </Link>
            <Link to = "/about">
            <AwesomeButton type="primary" >About</AwesomeButton>
            </Link>
            <Link to = "/projects">
            <AwesomeButton type="primary" >Projects</AwesomeButton>
            </Link>
            <Link to ="/contact">
            <AwesomeButton type="primary" >Contact</AwesomeButton>
            </Link>
        </div>
            

    )
}

export default NavBar