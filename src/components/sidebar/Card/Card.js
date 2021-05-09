import React from 'react'
import {useGroups} from '../../../context/groups'
import './style.css'
export function Card(props) {
    const {setGroups}=useGroups()
    const url="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    const{element}=props
    return (
      <div className="card" onClick={()=> setGroups(element)}>
        <img className="group-photo" src={url} />
         <div className="cardinfo">
            {element.title} 
           
           </div>
        
        </div> 
    )
}



