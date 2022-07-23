import React, {useRef, useState} from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import BookingScreen from './screens/BookingScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import FAQScreen from './screens/FAQScreen';
import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import PackagesScreen from './screens/PackagesScreen';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import firebase from 'firebase'; (? Video/Try To Fix Error)
//import firebase from 'firebase/app'; (Video)
//import 'firebase/firestore'; (Video)
//import 'firebase/auth'; (Video)
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatRoom from './screens/ChatRoom'
import SignOut from './screens/SignOut'

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

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row" style={{backgroundColor: "#ff69b4", height:50}}>
      <div>
        <div style={{marginLeft: -4, marginBottom: 10}}>
      <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            </div>
            <div style={{marginLeft: 40, marginTop: -50}}>
            <Link className="brand" to="/" style={{fontSize: 35, color: "white"}}>
              Decorativelily
            </Link>
            </div>
            </div>
      </header>
      <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul>
            <li style={{marginLeft: 250}}>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
                style={{color: "#ff69b4"}}
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
          </ul>
          <div>
            <ul>
              <li style={{}}>
                <a href="/" style={{color: "#ff69b4"}}>Home</a>
              </li>
            </ul>
            <ul>
              <li style={{marginTop: 10}}>
                <a href="/about" style={{color: "#ff69b4"}}>About</a>
              </li>
            </ul>
            <ul>
              <li style={{marginTop: 10}}>
                <a href="/gallery" style={{color: "#ff69b4"}}>Gallery</a>
              </li>
            </ul>
            <ul>
              <li style={{marginTop: 10}}>
                <a href="/package" style={{color: "#ff69b4"}}>Packages</a>
              </li>
            </ul>
            <ul>
              <li style={{marginTop: 10}}>
                <a href="/booking" style={{color: "#ff69b4"}}>Book A Picnic</a>
              </li>
            </ul>
            <ul>
              <li style={{marginTop: 10}}>
                <a href="/faq" style={{color: "#ff69b4"}}>FAQ</a>
              </li>
            </ul>
            <ul>
              <li style={{marginTop: 10}}>
                <a href="/contact" style={{color: "#ff69b4"}}>Contact Us</a>
              </li>
            </ul>
          </div>
        </aside>
      <main>
      <div class="row center" style={{justifyContent: "space-evenly"}}>
      <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/" style={{color: "#ff69b4"}}>Home</a>
          </li>
        </ul>
        <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/about" style={{color: "#ff69b4"}}>About</a>
          </li>
        </ul>
        <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/gallery" style={{color: "#ff69b4"}}>Gallery</a>
          </li>
        </ul>
        <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/package" style={{color: "#ff69b4"}}>Packages</a>
          </li>
        </ul>
        <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/booking" style={{color: "#ff69b4"}}>Book A Picnic</a>
          </li>
        </ul>
        <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/faq" style={{color: "#ff69b4"}}>FAQ</a>
          </li>
        </ul>
        <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/contact" style={{color: "#ff69b4"}}>Contact Us</a>
          </li>
        </ul>
        <section>
          <ChatRoom />
          <SignOut />
          {user ? <ChatRoom /> : <SignIn />}
        </section>
        </div>
        <Routes>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/contact" element={<ContactUsScreen />}></Route>
          <Route path="/faq" element={<FAQScreen />}></Route>
          <Route path="/gallery" element={<GalleryScreen />}></Route>
          <Route path="/booking" element={<BookingScreen />}></Route>
          <Route path="/package" element={<PackagesScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
        </Routes>
      </main>
      <footer className="row center" style={{marginBottom: -10, backgroundColor: "#ff69b4"}}>
          <div style={{color: "white"}}>&#169; 2022 DecorativeLily LLC. All Rights Reserved.</div>
      </footer>
      </div>
    </BrowserRouter>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

return (
  <>
    <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    <p>Do not violate the community guidelines or you will be banned for life!</p>
  </>
)

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {
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

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="Decorativelily" />
       <p>{text}</p>
    </div>
  )
}
}
}
export default App;

//CSS in App.css

//firebase init functions
//cd functions
//npm i bad-words

/* (index.js)
const functions = require('firebase-functions');
const Filter = require('bad-words');

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.detectEvilUsers = functions.firestore
.document('messages/{msgId}')
.onCreate(async (doc, ctx) => {

  const filter = new Filter();
  const { text, uid } = doc.data();

  if (filter.isProfane(text)) {

    const cleaned = filter.clean(text);
    await doc.ref.update({text: `I got banned for life for saying... ${cleaned}`});

    await db.collection('banned').doc(uid).set({});
  }
})
*/

//firebase deploy --only functions