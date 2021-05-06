import React from 'react'
import firebase from 'firebase/app'
import {auth} from '../../firebase'

function Login() {
    
function signIn() {
   const provider = new firebase.auth.GoogleAuthProvider();
   auth.signInWithPopup(provider);
}
    return (
        <div>
            <button onClick={signIn}>Signin</button>
        </div>
    )
}

export default Login
