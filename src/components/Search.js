import React, { useEffect, useState } from 'react';
import { useForm } from './../hooks/useForm';

export const Search = ( {listVideos} ) => {

    const [filteredVideos, setFilteredVideos] = useState(null);
    
    const [ formValues, handleInputChange ] = useForm({ searchText: " ",  });

    const { searchText } = formValues;
    

    const handleSearch = (e) =>{

        e.preventDefault();

        if( searchText.length > 1 ){

            
            const searchTextUpper = searchText.toUpperCase();
    
            const listUpper = listVideos?.map( video =>({
    
                ...video,
                title: video?.title?.toUpperCase()
    
            }))
            
            const listVdeosNew = listUpper.map( video => (
    
                (video?.title?.includes(searchTextUpper)) && video  
    
                ))
            
    
            const listVdeosNew2 = listVdeosNew.filter( item => item !== false) 
    
    
            setFilteredVideos(listVdeosNew2)

        }

        
        
    }

    useEffect(() => {
        
        setFilteredVideos(filteredVideos)

    }, [filteredVideos,formValues])



    return (
        <div className="mb-2 mt-4 p-4">

            <form onSubmit={handleSearch}>
                <input
                    className="form-control" 
                    type="text" 
                    placeolder="Search.."
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={handleInputChange}    
                    />
            </form>

            <div className="row mt-4"  style={{maxHeight:500, overflow: 'hidden', overflowY: 'scroll'}}>

            {filteredVideos?.map( item =>(

                    <div className="col list-group-item-action"  style={{cursor: 'pointer'}} key={item.title}>
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
