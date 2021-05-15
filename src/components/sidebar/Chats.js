import React,{useEffect, useState} from 'react'
// import Online from '../Active/Online'
import {firestore} from '../../firebase'
import './style.css'
import {Card} from './Card/Card'
import {useGroups} from '../../context/groups'
import {auth} from '../../firebase'
import firebase from 'firebase/app'



function Chats() {
   const [Chats , setChats]=useState([])
   const {groups}=useGroups()
   const [newGroup,setNewgroup] = useState({
   title:null,
   adding:false,
   admin:null,
 })


   
  useEffect( async() => {
     const allChats = await firestore.collection('group').get();
     allChats.docs.map(item =>!Chats.find(element=>element.id === item.id) && setChats( (group)=>[...group,{...item.data(),id: item.id}] ) )
    },[groups])

    const createGroup = async() => {
       setNewgroup({...newGroup,adding:true})
       if(newGroup.title !== ""){

            await firestore.collection('group').add({
               title: newGroup.title,
               admin:auth.currentUser.uid,
               createAt:firebase.firestore.FieldValue.serverTimestamp(),
            })
            setNewgroup({...newGroup,adding:false,title:""})
         }

      }

    return (
        <div className="chat-list">
           <p className="Chats-head">Chats</p>
           {/* <Online/> */}
           <div className="create">
              { newGroup.adding && <input className="create-input"   type="text" onChange={(e)=>setNewgroup({...newGroup,title:e.target.value })}/>}
              <button className="create-btn"  onClick={createGroup}>Create Group</button>
           </div>
           <div className="cards-container">
           <p className="recent"> Recent</p>    
              {Chats.map(element => <Card element={element} />)}
           </div>
            
        </div>
    )
}

export default Chats
