import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
    apiKey: "AIzaSyD6DLDaethiiWD6U8IvWzT1--PUFrogvp8",
    authDomain: "decorativelily-llc.firebaseapp.com",
    projectId: "decorativelily-llc",
    storageBucket: "decorativelily-llc.appspot.com",
    messagingSenderId: "468084792785",
    appId: "1:468084792785:web:8e2c84925dcb15d9f2d4f0",
    measurementId: "G-GJN9MB016R"
  })

const auth = firebase.auth();

function ChatMessage(props) {
    const [user] = useAuthState(auth);
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL} />
         <p>{text}</p>
      </div>
    )
}
export default ChatMessage