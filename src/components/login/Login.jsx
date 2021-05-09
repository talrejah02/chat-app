import React from 'react'
import firebase from 'firebase/app'
import {auth} from '../../firebase'
import './login.css';


function Login() {
    
function signIn() {
   const provider = new firebase.auth.GoogleAuthProvider();
   auth.signInWithPopup(provider);
}

    return (
        <div className="login">
            <h1>Babble Up</h1>
            <h2>Sign in to continue</h2>
            <h4>Do not violate the community guidelines</h4>
            <button onClick={signIn}>Signin</button>
        </div>
    )
}

export default Login
