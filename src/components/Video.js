import React, { useContext, useEffect, useState } from 'react';
import { getDataAxios } from './../helpers/getDataAxios';
import { List } from './List';
import { Search } from './Search';
import { DataContext } from './Context/Context';


export const Video = () => {

    const [listVideos, setListVideos] = useState([])

    const [displayVideo, setDisplayVideo] = useState(null);

    const [mainVideo, setMainVideo] = useState(null);

    const {dataContext} = useContext(DataContext)
    
    const {titleSlected} = dataContext; 

    const divVideo = document.getElementById('video');

    const [loading, setLoading] = useState(false);


    useEffect(() => {

        getDataAxios().then((data) =>{
            setListVideos(data);

        }); 
        
    }, [])

    useEffect(() => {
        
        if(!mainVideo){
            setDisplayVideo( listVideos[0]?.videos[0]?.embed );
        }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listVideos])

    useEffect(() => {
     
        if(divVideo){
            setLoading(true);
                    
                    divVideo.innerHTML = displayVideo
                                
            setLoading(false);
        }

    }, [divVideo,displayVideo])

    useEffect(() => {
        
        listVideos?.forEach( element => (

        
            (element?.title === titleSlected) && setMainVideo(element) 
            
            ))

        setDisplayVideo(mainVideo?.videos[0]?.embed)  
            
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [titleSlected,mainVideo])
    


    return (
        <div className="row m-0 p-0">

            <Search listVideos={listVideos} />

            <h1 className="text-center" id="lastVideos">Last videos</h1>
            <hr/>


            {(mainVideo) && 
             
            <div className="col-12 col-md-8 animate__animated animate__fadeIn">

                <h4><strong>{mainVideo?.title} </strong></h4>
                <h5>{mainVideo?.videos[0]?.title}</h5>

                <div id="video" className="animate__animated animate__fadeIn"></div>
            
                <h5> {mainVideo?.competition}</h5>

            </div>
            
            }

            {(!mainVideo) &&

                <div className="col-12 col-md-8 animate__animated animate__fadeIn">

                    <h4><strong>{listVideos[0]?.title} </strong></h4>
                    <h5>{listVideos[0]?.videos[0]?.title}</h5>

                    <div id="video" className="animate__animated animate__fadeIn"></div>
                
                    <h5> {listVideos[0]?.competition}</h5>

                </div>
            
            }


            <div className="col col-md">
                <List listVideos={listVideos}/>
            </div>


        </div>
    )
}
