import React from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import BookingScreen from './screens/BookingScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import FAQScreen from './screens/FAQScreen';
import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import PackagesScreen from './screens/PackagesScreen';
import SupportScreen from './screens/SupportScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row" style={{backgroundColor: "#ff69b4"}}>
        <Link to="/" style={{color: "white", fontSize: 35}}>
        <img src='../images/decorativelilyalt.JPG' alt="Decorativelily Logo" height="35" width="75" style={{marginBottom: -5}}/> DecorativeLily
        </Link>
      </header>
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
            <a href="/support" style={{color: "#ff69b4"}}>Support</a>
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
          <Route path="/support" element={<SupportScreen />}></Route>
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
<img src='/images/decorativelily.JPG' height="35" width="150" />
*/

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