import React, { useEffect, useState } from 'react';
import { getDataAxios } from './../helpers/getDataAxios';
import { List } from './List';

export const Video = () => {

    const [listVideos, setListVideos] = useState([])

    const [displayVideo, setDisplayVideo] = useState(null)
    

    const divVideo = document.getElementById('video')


    useEffect(() => {

        getDataAxios().then((data) =>{
            setListVideos(data);

        }); 
        
        setDisplayVideo( listVideos[0]?.videos[0]?.embed );

    }, [listVideos])

    useEffect(() => {
     
        if(divVideo){
            divVideo.innerHTML = displayVideo
        }

    }, [divVideo,displayVideo])
    


    return (
        <div className="row">

            <div className="col-12 col-md-8">
                <h4><strong>{listVideos[0]?.title} </strong></h4>
                <h5>{listVideos[0]?.videos[0]?.title}</h5>

                <div id="video"></div>
            
                <h5> {listVideos[0]?.competition}</h5>

            </div>

            <div className="col col-md">
                <List listVideos={listVideos}/>
            </div>


        </div>
    )
}
