import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';
import ContactUs from './Pages/ContactUs';
import ScrollToTop from './Common/ScrollToTop';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <ScrollToTop />
                <div className="page-wraper">
                        <Routes>
                            <Route path='/' element={<Home/>} />
                            <Route path='/about' element={<About/>} />
                            <Route path='/work' element={<Work/>} />
                            <Route path='/contact-us' element={<ContactUs/>} />
                       </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;