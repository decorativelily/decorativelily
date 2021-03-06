import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import BookingScreen from './screens/BookingScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import FAQScreen from './screens/FAQScreen';
import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import PackagesScreen from './screens/PackagesScreen';
import ChatScreen from './screens/ChatScreen';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row" style={{backgroundColor: "#ff69b4", height:50}}>
      <div>
        <div style={{marginLeft: -5, paddingTop: 5}}>
      <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            </div>
            <div style={{marginLeft: 30, marginTop: -46}}>
            <Link className="brand" to="/">
              <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 50, width: 300}}/>
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
        <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/chat" style={{color: "#ff69b4"}}>Support</a>
          </li>
        </ul>
        </div>
        <Routes>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/contact" element={<ContactUsScreen />}></Route>
          <Route path="/faq" element={<FAQScreen />}></Route>
          <Route path="/gallery" element={<GalleryScreen />}></Route>
          <Route path="/booking" element={<BookingScreen />}></Route>
          <Route path="/package" element={<PackagesScreen />}></Route>
          <Route path="/chat" element={<ChatScreen />}></Route>
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
export default App;