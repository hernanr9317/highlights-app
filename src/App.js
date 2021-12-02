import React from 'react';
import { Video } from './components/Video';
import { Search } from './components/Search';
import { Navbar } from './components/Navbar';

export const App = () => {
    return (
        <div className="container mt-2">
            <Navbar />
            <Search />
            <Video />
            
        </div>
    )
}
