import React, { useEffect, useState } from 'react';
import { useForm } from './../hooks/useForm';

export const Search = ( {listVideos} ) => {

    const [filteredVideos, setFilteredVideos] = useState(null);
    
    const [ formValues, handleInputChange ] = useForm({searchText:""});

    const { searchText } = formValues;

    const [mainVideo, setMainVideo] = useState(null);

    const divVideoSearch = document.getElementById('videoSearch');

    const [displayVideo, setDisplayVideo] = useState(null);



    const handleSearch = (e) =>{

        let searchTextClean = searchText.trim()

        e.preventDefault();

        if( searchText.length > 1 ){

            setMainVideo(null);
            
    
            const listUpper = listVideos?.map( video =>({
    
                ...video,
                title: video?.title?.toUpperCase()
    
            }));

 
            let list = listUpper?.filter( item => item?.title?.includes(searchTextClean.toUpperCase()) === true);

      
            setFilteredVideos(list);
        }
        
    }



    const handleClick = (e, titleSlected) => {

        e.preventDefault()
        
        filteredVideos?.forEach( element => (

        
            (element?.title === titleSlected) && setMainVideo(element) 
            
        ))

    }

    useEffect(() => {

        setDisplayVideo(mainVideo?.videos[0]?.embed)  

     
        if(divVideoSearch){
            divVideoSearch.innerHTML = displayVideo
        }

    }, [divVideoSearch,displayVideo, mainVideo])

 


    return (
        <div className="mb-2 p-4" id="search">

            <form onSubmit={handleSearch}>
                <input
                    className="form-control" 
                    type="text" 
                    placeholder="Search..."
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={handleInputChange}    
                />

            </form>


            <div className="row mt-4 d-flex justify-content-center"  style={{maxHeight:500, overflow: 'hidden', overflowY: 'scroll'}}>

            {(mainVideo) && 
            
                <div className="col-12 col-md-10">
                    <h4><strong>{mainVideo?.title} </strong></h4>
                    <h5>{mainVideo?.videos[0]?.title}</h5>

                    <div id="videoSearch" style={{maxWidth: 700}}></div>
                
                    <h5> {mainVideo?.competition}</h5>

                </div>           
            
            }



            { (!mainVideo) && 
            
                    filteredVideos?.map( item =>(

                    <div className="col list-group-item-action"  style={{cursor: 'pointer'}} key={item.title} onClick={ (e) => handleClick(e, item.title)}>
                        <h5><strong>{item?.title} </strong></h5>
                        <h6>{item?.videos[0]?.title}</h6>

                        <img alt="" src={item.thumbnail} style={{maxWidth: 350}}/>

                        <h6> {item?.competition}</h6>

                        <hr />

                    </div>
                    ))}

            </div>
            {(filteredVideos !== null && filteredVideos.length === 0) && 
            
                <div class="alert alert-secondary" role="alert">
                 No results found!
                </div>
             }
            


        </div>
    )
}
