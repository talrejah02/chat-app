import React from 'react'
import './style.css'
import Navbar from '../sidebar/Navbar';
import Chats from '../sidebar/Chats';
import Chatbox from '../ChatBox/Chatbox';

function ChatView() {
  
    
    


    return (
        <div className="Container">
        <Navbar/>
        <Chats/>
        <Chatbox/>
        </div>

            
                       
            
    )

}

export default ChatView
