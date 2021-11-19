import React, { useState } from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Header from './Header';
import Footer from './Footer'

function Main() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        };
        if (currentPage === 'Contact') {
            return <Contact />
        }
        return <Projects />
    };

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div className='main-parent'>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className='main-child'>{renderPage()}</div>
            <Footer />
        </div>
    )
}

export default Main