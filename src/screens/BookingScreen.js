import React from 'react'

function BookingScreen() {
  return (
    <div>
      <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4", fontSize: 35}}>
        Picnic Booking Request
      </div>
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
  )
}

export default BookingScreen
