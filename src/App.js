//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import BookingScreen from './screens/BookingScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import FAQScreen from './screens/FAQScreen';
import GalleryScreen from './screens/GalleryScreen';
import HomeScreen from './screens/HomeScreen';
import PackagesScreen from './screens/PackagesScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row" style={{backgroundColor: "#ff69b4"}}>
        <Link className="brand" to="/" style={{color: "white"}}>
          Decorativelily
        </Link>
      </header>
      <main>
      <div>
    </div>
      <Routes>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/booking" element={<BookingScreen />}></Route>
        <Route path="/contact" element={<ContactUsScreen />}></Route>
        <Route path="/faq" element={<FAQScreen />}></Route>
        <Route path="/gallery" element={<GalleryScreen />}></Route>
        <Route path="/packages" element={<PackagesScreen />}></Route>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
      </main>
      <footer className="row center" style={{marginBottom: -10, backgroundColor: "#ff69b4"}}>
          <div style={{color: "white"}}>&#169; 2022 Decorativelily LLC. All Rights Reserved.</div>
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
<img src='/images/decorativelily.JPG' height="35" width="150" />
*/