import React from 'react'

function HomeScreen() {
    return (
        <div>
        <div class="row center" style={{justifyContent: "space-evenly", marginTop: 10}}>
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
            <a href="/packages" style={{color: "#ff69b4"}}>Packages</a>
          </li>
        </ul>
        <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/booking" style={{color: "#ff69b4"}}>Book A Picnic</a>
          </li>
        </ul>
        <ul>
          <li class="tablinks" style={{padding: 2}}>
            <a href="/gallery" style={{color: "#ff69b4"}}>Gallery</a>
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
      <div style={{marginTop: 35}}>
      <img src='/images/decorativelilyalt.JPG' height="800" width="100%" />
      </div>
    <div className="row center" style={{flex: "row", marginTop: 50}}>
        <a href="https://www.facebook.com/decorativelily" class="btn social-icon button" data-abc="true">
          <i style={{color: "#C13584", paddingRight: 15, fontSize: 25}} class="fa fa-facebook btn-round fa-lg"></i>
        </a>
        <a href="https://www.instagram.com/decorativelily" class="btn social-icon button" data-abc="true">
          <i style={{color: "#C13584", fontSize: 25}} class="fa fa-instagram btn-round fa-lg"></i>
        </a>
      </div>
      </div>
    )
}

export default HomeScreen
