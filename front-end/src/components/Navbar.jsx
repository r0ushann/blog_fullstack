import React from 'react';
import {Link} from 'react-router-dom'
import Logo from './Images/logo.jpg';


const Navbar =() => {
    return (
        <div className='navbar' >
            <div className='container'>
                <a href='https://www.github.com/r0ushann'>
                    <div className='logo'>
                        <img src={Logo} alt="" />
                    </div>
                </a>
                    
                <div className='links'>
                    <Link className='link' to="/?cat=art">
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to="/?cat=science">
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className='link' to="/?cat=technology">
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className='link' to="/?cat=cinema">
                        <h6>CINEMA</h6>
                    </Link>
                    <Link className='link' to="/?cat=design">
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className='link' to="/?cat=food">
                        <h6>FOOD</h6>
                    </Link>
                    <span className=''>Roushan</span>
                    <span className=''>Logout</span>
                    <span className='write'>
                        <Link className='link' to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar