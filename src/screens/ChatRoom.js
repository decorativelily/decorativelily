import React, {useRef, useState} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import firebase from 'firebase'; (? Video/Try To Fix Error)
//import firebase from 'firebase/app'; (Video)
//import 'firebase/firestore'; (Video)
//import 'firebase/auth'; (Video)
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

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

function ChatRoom() {
    const [user] = useAuthState(auth);
    const dummy = useRef()
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, {idField: 'id'});
  
    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async(e) => {
  
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      });
  
      setFormValue('');
  
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
  return (
    <>
    <section>
        {user ? <ChatRoom /> : <SignIn />}
    </section>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <div ref={dummy}></div>
    </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
  
  function SignOut() {
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
  }}
  export default ChatRoom
