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


    useEffect(() => {

        getDataAxios().then((data) =>{
            setListVideos(data);

        }); 
        
    }, [])

    useEffect(() => {
        
        if(!mainVideo){

            setDisplayVideo( listVideos[0]?.videos[0]?.embed );
        }


    }, [listVideos])

    useEffect(() => {
     
        if(divVideo){
            divVideo.innerHTML = displayVideo
        }

    }, [divVideo,displayVideo])

    useEffect(() => {
        
        listVideos?.forEach( element => (

        
            (element?.title === titleSlected) && setMainVideo(element) 
            
            ))

        setDisplayVideo(mainVideo?.videos[0]?.embed)  
            
       
    }, [titleSlected,mainVideo])
    


    return (
        <div className="row">

            <Search listVideos={listVideos} />


            {(mainVideo) && 
            
            <div className="col-12 col-md-8">
                <h4><strong>{mainVideo?.title} </strong></h4>
                <h5>{mainVideo?.videos[0]?.title}</h5>

                <div id="video"></div>
            
                <h5> {mainVideo?.competition}</h5>

            </div>
            
            }

            {(!mainVideo) &&

                <div className="col-12 col-md-8">
                    <h4><strong>{listVideos[0]?.title} </strong></h4>
                    <h5>{listVideos[0]?.videos[0]?.title}</h5>

                    <div id="video"></div>
                
                    <h5> {listVideos[0]?.competition}</h5>

                </div>
            
            }


            <div className="col col-md">
                <List listVideos={listVideos}/>
            </div>


        </div>
    )
}
