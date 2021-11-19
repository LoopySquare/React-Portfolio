import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
    return (
        <div classname='header'>
            <h1>Hi, I am Tommy Jobin</h1>
            <h2>Full stack web developer & graphic designer</h2>
            <Navbar currentPage={props.currentPage} handlePageChange= {props.handlePageChange}/>
        </div>
    )
}

export default Header