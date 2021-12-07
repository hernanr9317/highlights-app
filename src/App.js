import React, { useState } from 'react';
import { DataContext } from './components/Context/Context';
import { AppRouter } from './router/AppRouter';


export const App = () => {

    const [dataContext, setDataContext] = useState({})

    return (
        <div className="container mt-2 p-0">
        
        <DataContext.Provider value={ { dataContext, setDataContext } }>


            <AppRouter />
            

        </DataContext.Provider>
        
        </div>
    )
}
