import React, { useContext } from 'react';
import { DataContext } from './Context/Context';

export const List = ({listVideos}) => {


    const {dataContext, setDataContext} = useContext(DataContext);

    

    const handleClick = (e, title) => {

        e.preventDefault();
       
        setDataContext({...dataContext, titleSlected: title})

    }

    return (
        <div>
            <ul className="list-group list-group-flush" style={{maxHeight:800, overflow: 'hidden', overflowY: 'scroll'}}>

                {listVideos?.map( item =>(

                  
                    <li className="list-group-item list-group-item-action" style={{cursor: 'pointer'}} key={item.title} onClick={ (e) => handleClick(e, item.title)}>
                        <h4><strong>{item?.title} </strong></h4>
                        <h5>{item?.videos[0]?.title}</h5>

                        <img alt="" src={item.thumbnail} style={{width: '90%'}}/>

                        <h5> {item?.competition}</h5>

                    </li>
                ))}

            </ul>


        </div>
    )
}
