import React from 'react'
import './App.css';
import {useAuthState} from 'react-firebase-hooks/auth'
// import {useCollectionData} from 'react-firebase-hooks/firestore'
import ChatView from './components/ChatView/ChatView';
import Login from './components/login/Login';
import {auth} from './firebase'

function App() {
  
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      
      {user? <ChatView/> : <Login/>}

    </div>
  );
}

export default App;
