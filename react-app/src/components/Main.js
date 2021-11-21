import React, { useState } from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import DevProjects from '../pages/DevProjects';
import Header from './Header';
import Footer from './Footer';
import CreativeProjects from '../pages/CreativeProjects';

function Main() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        };
        if (currentPage === 'Contact') {
            return <Contact />
        };
        if (currentPage === 'Creative') {
            return <CreativeProjects />
        }
        return <DevProjects />
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