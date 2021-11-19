import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
    return (
        <div classname='header'>
            <Navbar currentPage={props.currentPage} handlePageChange= {props.handlePageChange}/>
            <h1 className='header-title'>Hello, I'm</h1>
            <h1 className='header-title'>Tommy Jobin</h1>
            <h1 className='header-description'>Full stack web developer & graphic designer</h1>
        </div>
    )
}

export default Header