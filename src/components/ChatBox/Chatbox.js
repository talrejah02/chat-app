import React,{useState,useEffect} from 'react'
import {auth, firestore} from '../../firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import './style.css'
import {useGroups} from '../../context/groups'


function Chatbox() {
    const [msg,setmsg]=useState([])
    const {groups} = useGroups()
    const curentid= auth.currentUser.uid
  useEffect(async()=>{
      const messageRef  =   firestore.collection('group').doc(groups.id).collection('messages');
      messageRef.onSnapshot((message)=> setmsg( ()=> message.docs))
      console.log(groups.id)
      console.log(msg)
      
     
  },[groups.id])




    
    return (
        <div className="chat-view">
            <div> <h2>chat</h2></div>
            <div className="msg-div">
                {msg&& msg.map(msg => {
                    return(
                        
                        <div className="msg" key={msg.id} >{msg.data().text} { msg.data().sentBy}</div>
                        );
                        
                    }
                    )}
            </div>
            <div className="msg-input">
            <input type="text"/ >
          <button className="sendmsg-btn" >submit</button>
            </div>
        </div>
    )
    }
    


export default Chatbox
