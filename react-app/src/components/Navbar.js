import React from 'react';

function Navbar({ handlePageChange }) {
    return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-menu">
            <div className="navbar-end">
            <a className="navbar-item" href="#about" onClick={() => handlePageChange('About')}>About Me</a>
            <a className="navbar-item" href="#projects" onClick={() => handlePageChange('DevProjects')}>Developer Projects</a>
            <a className="navbar-item" href="#creative" onClick={() => handlePageChange('Creative')}>Designer Projects</a>
            <a className="navbar-item" href="#contact" onClick={() => handlePageChange('Contact')}>Contact Me</a>
            <a className="navbar-item" href="#" target="_blank" rel="noreferrer">Resume</a>            
            </div>
        </div>
    </nav>
    )
}

export default Navbar;

