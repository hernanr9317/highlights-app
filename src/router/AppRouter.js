import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Video } from './../components/Video';
import { Navbar } from './../components/Navbar';


export const AppRouter = () => {



    return (

        <BrowserRouter>

            <Navbar/>

            <Routes>

                <Route  path="/" element={ <Video /> } />

                <Route path="*" element={ <Video /> } />

            </Routes>

        </BrowserRouter>


    )
}
