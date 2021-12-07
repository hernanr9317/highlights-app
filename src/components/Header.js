import React from 'react';
import pelota from '../assets/pelota.png';

export const Header = () => {
    return (

        <>
        <section className="hero animate__animated animate__fadeIn">
        <div className="content">
            <h2>Highlights Football  <img src={pelota} alt="pelota" style={{width: 40}}/></h2>
            </div>
        <div className="waves"></div>
        </section>
            
        </>
     
        
    )
}
