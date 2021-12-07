import React, { useState } from 'react';
import { Video } from './components/Video';
import { Navbar } from './components/Navbar';
import { DataContext } from './components/Context/Context';

export const App = () => {

    const [dataContext, setDataContext] = useState({})

    return (
        <div className="container mt-2 p-0">
        
        <DataContext.Provider value={ { dataContext, setDataContext } }>

            <Navbar />
   
            <Video />
            

        </DataContext.Provider>
        
        </div>
    )
}
