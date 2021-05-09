import React,{useEffect, useState} from 'react'
// import Online from '../Active/Online'
import {firestore} from '../../firebase'
import './style.css'
import {Card} from './Card/Card'
import {useGroups} from '../../context/groups'



function Chats() {
   const [Chats , setChats]=useState([])
   // const {groups}=useGroups()
   
  useEffect( async() => {
     const allChats = await firestore.collection('group').get();
     allChats.docs.map(item =>!Chats.find(element=>element.id === item.id) && setChats( (group)=>[...group,{...item.data(),id: item.id}] ) )
    },[])
     
    




     
    

    return (
        <div className="chat-list">
           <p className="Chats-head">Chats</p>
           {/* <Online/> */}
           <div className="cards-container">
           <p className="recent"> Recent</p>

          

          
              
              {Chats.map(element => <Card element={element} />)}
          
          
           </div>
            
        </div>
    )
}

export default Chats
