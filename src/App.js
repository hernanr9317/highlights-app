import React, { useState } from 'react';
import { DataContext } from './components/Context/Context';
import { AppRouter } from './router/AppRouter';
import { Header } from './components/Header';


export const App = () => {

    const [dataContext, setDataContext] = useState({})

    return (
        
        <DataContext.Provider value={ { dataContext, setDataContext } }>

            <Header />

            <div className="container mt-2 p-0 animate__animated animate__fadeIn">

                <AppRouter />
                
            </div>

        </DataContext.Provider>
        
    )
}
