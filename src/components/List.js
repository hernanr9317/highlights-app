import React from 'react';

export const List = ({listVideos}) => {


    return (
        <div >
            <ul className="list-group list-group-flush" style={{maxHeight:800, overflow: 'hidden', overflowY: 'scroll'}}>

                {listVideos?.map( item =>(

                    (listVideos[0]?.title !== item?.title  ) &&

                    <li className="list-group-item list-group-item-action" style={{cursor: 'pointer'}} key={item.title}>
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
