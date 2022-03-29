import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar'
import { About } from './About'
import { User } from './User'
import { Top } from './Top';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Top />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
