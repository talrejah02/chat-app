import React from 'react'
import {useGroups} from '../../../context/groups'
import './style.css'
export function Card(props) {
    const {setGroups}=useGroups()

    const{element}=props
    return (
      <div className="card" onClick={()=> setGroups(element)}>{element.title}</div> 
    )
}



