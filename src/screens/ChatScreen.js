import React, { useRef, useState } from 'react';
//import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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
const firestore = firebase.firestore();
//const analytics = firebase.analytics();

function ChatScreen() {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header style={{color: "#ff69b4", textAlign: "center"}}>
        <h1>Chat</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div style={{textAlign: "center"}}>
      <button className="sign-in" onClick={signInWithGoogle} style={{color: "#ff69b4"}}>Sign in with Google</button>
      <p></p>
    </div>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()} style={{color: "#ff69b4"}}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage} style={{textAlign: "center"}}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Enter Message" style={{color: "#ff69b4", textAlign: "center"}}/>

      <button type="submit" disabled={!formValue} style={{color: "#ff69b4"}}>Submit</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`} style={{color: "#ff69b4"}}>
      <img src={photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"} alt="Decorativelily" style={{width: "40px", height: "40px", borderRadius: "50%", margin: "2px 5px" }}/>
      <p>{text}</p>
    </div>
  </>)
}

export default ChatScreen;