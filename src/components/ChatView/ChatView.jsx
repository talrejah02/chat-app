import React from 'react'
import './style.css'
import firebase from 'firebase/app';
import {firestore} from '../../firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'

function ChatView() {
 
    const messageRef = firestore.collection('group').doc("qrFLmbe7PYdLlUCyrYW3").collection('messages');
    const query = messageRef.limit(25);
    const [messages] = useCollectionData(query,{ idField:'qrFLmbe7PYdLlUCyrYW3'});


    return (
        <div className="chat-view">
            <div> <h2>chat</h2></div>
            <div className="msg-div">
                {messages&& messages.map(msg => {

                    return(
                        
                        <div className="msg" key={msg.id}>{msg.text}</div>
                        );
                        
                    }
                    )}
            </div>
            <div className="msg-input">
            <input type="text"/>
          <button className="sendmsg-btn">submit</button>
            </div>
                       
            
        </div>
    )

}

export default ChatView
