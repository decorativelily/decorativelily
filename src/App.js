import React, {useState} from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import BookingScreen from './screens/BookingScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import FAQScreen from './screens/FAQScreen';
import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import PackagesScreen from './screens/PackagesScreen';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
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
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
          </ul>
          <div>
            <ul>
              <li style={{marginTop: -35}}>
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

export default App;

/*
<Routes>
<Route path="/about" element={<AboutScreen />}></Route>
<Route path="/booking" element={<BookingScreen />}></Route>
<Route path="/contact" element={<ContactUsScreen />}></Route>
<Route path="/faq" element={<FAQScreen />}></Route>
<Route path="/gallery" element={<GalleryScreen />}></Route>
<Route path="/packages" element={<PackagesScreen />}></Route>
<Route path="/" element={<HomeScreen />}></Route>
</Routes>
*/