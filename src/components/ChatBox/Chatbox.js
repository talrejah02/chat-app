import React,{useState,useEffect} from 'react'
import {auth, firestore} from '../../firebase'
import firebase from 'firebase/app';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import './style.css'
import {useGroups} from '../../context/groups'


function Chatbox() {
    const url="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

    const [msg,setmsg]=useState([])
    const {groups} = useGroups()
    const curentid= auth.currentUser.uid
    const photourl = auth.currentUser.photoURL
    const[formvalue,setvalue]=useState(null)
    
  useEffect(async()=>{
      const messageRef  =   firestore.collection('group').doc(groups.id).collection('messages').orderBy('createdAt','asc');
      messageRef.onSnapshot((message)=> setmsg( ()=> message.docs))
      console.log(groups.id)
      console.log(msg)
      
     
  },[groups.id])

  async function updatemsg(e) {
    e.preventDefault()
    firestore.collection('group').doc(groups.id).collection('messages').add({
         
        text: formvalue,
        sentBy: curentid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL:photourl
    })
    setvalue('')

  }
  const inputchange= (e)=>{
      setvalue(e.target.value)
  }


    
    return (
        <div className="chat-view">
            <div className="group-title"> 
             <img className="group-pic" src={url}/>
             <h2>{groups.title}</h2>
             
             </div>
             {/* <hr/> */}

            <div className="msg-div">
                {msg&& msg.map(msg => {
                    return(

                        <div className={curentid === msg.data().sentBy ? "msg-container" : "rmsg-container"}>
                             
                               <img className="photo" src={photourl}></img>
                            <div className="msg" key={msg.id} > 
                              {msg.data().text}
                              </div>
                        </div>

                        );
                        
                    }
                    )}
            </div>
            {/* <hr/> */}
            <div className="msg-input">
            <input type="text" value={formvalue} onChange={inputchange} placeholder="Type something peaceful"/>
                
                <button className="attach-btn"><svg width="1.5rem" height="1.5rem" viewBox="0 0 512 512"><path d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304" fill="none" stroke="#7269EF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path><path d="M288 72v120a32 32 0 0 0 32 32h120" fill="none" stroke="#7269EF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></path><path d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144" fill="none" stroke="#7269EF" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"></path></svg></button>


                 <button className="sendmsg-btn"  onClick={updatemsg} ><svg width="1.5rem" height="1.5rem" viewBox="0 0 28 28"><g fill="none"><path d="M3.79 2.772L24.86 12.85a1.25 1.25 0 0 1 0 2.255L3.79 25.183a1.25 1.25 0 0 1-1.746-1.457l2.108-7.728a.5.5 0 0 1 .415-.364l10.21-1.387a.25.25 0 0 0 .195-.149l.018-.063a.25.25 0 0 0-.157-.268l-.055-.015l-10.2-1.386a.5.5 0 0 1-.414-.364l-2.12-7.773A1.25 1.25 0 0 1 3.79 2.772z" fill="#E1E9F1"></path></g></svg></button>
            </div>

        </div>
    )
    }
    


export default Chatbox
