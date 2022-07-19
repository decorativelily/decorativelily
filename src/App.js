//import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
      <form className="form" name="contact-form" method="POST" data-netlify="true" style={{}}>
        <input type="hidden" name="form-name" value="contact-form" />
        <div style={{textAlign: "center"}}>
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div style={{textAlign: "center"}}>
          <input type="text" placeholder="Email" name="email" />
        </div>
        <div style={{textAlign: "center"}}>
          <input type="text" placeholder="Phone Number" name="phoneNumber" />
        </div>
        <div style={{textAlign: "center"}}>
          <input type="text" placeholder="Occassion" name="occassion" />
        </div>
        <div style={{textAlign: "center"}}>
          <input type="text" placeholder="Date" name="date" />
        </div>
        <div style={{textAlign: "center"}}>
          <input type="text" placeholder="Location" name="location" />
        </div>
        <div style={{textAlign: "center"}}>
          <input type="text" placeholder="Time" name="time" />
        </div>
        <div style={{textAlign: "center"}}>
          <input type="text" placeholder="Guest Count" name="guestCount" />
        </div>
        <div style={{textAlign: "center"}}>
          <textarea placeholder="Message" name="message"></textarea>
        </div>
        <div style={{textAlign: "center"}}>
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
  );
}

export default App;

/*
 <div style={{textAlign: "center", marginTop: 50}}>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
<img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 300, width: 500}}></img>
</div>
*/

/*
<div className="row center" style={{flex: "row"}}>
<a href="https://www.facebook.com/decorativelily" class="btn social-icon button" data-abc="true">
<i style={{color: "#C13584"}} class="fa fa-facebook btn-round fa-lg"></i>
</a>
<a href="https://www.instagram.com/decorativelily" class="btn social-icon button" data-abc="true">
<i style={{color: "#C13584"}} class="fa fa-instagram btn-round fa-lg"></i>
</a>
</div>
*/

/*
<footer className="row center" style={{textAlign: "center", marginTop: 50}}>&#169; 2022 Decorativelily Inc. All rights reserved.</footer>
*/