import React from 'react'

function BookingScreen() {
  return (
    <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4", fontSize: 35}}> Book A Picnic
     <form className="form" name="booking" method="POST" data-netlify="true" style={{}}>
                <input type="hidden" name="form-name" value="booking" />
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Name" name="name" style={{color: "#ff69b4"}} required/>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Email" name="email" style={{color: "#ff69b4"}} required/>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Phone Number" name="phoneNumber" style={{color: "#ff69b4"}} required/>
            </div>
            <div className="dropdown" style={{textAlign: "center"}}>
                   <select name="occassion" style={{color: "#ff69b4"}}>
                       <option name="" value="">Occassion</option>
                       <option name="occassion" value="anniversary" style={{color: "#ff69b4"}}>Anniversary</option>
                       <option name="occassion" value="birthday" style={{color: "#ff69b4"}}>Birthday</option>
                       <option name="occassion" value="graduation" style={{color: "#ff69b4"}}>Graduation</option>
                       <option name="occassion" value="wedding" style={{color: "#ff69b4"}}>Wedding</option>
                   </select>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="date" placeholder="Date" name="date" style={{color: "#ff69b4"}} required/>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Location" name="location" style={{color: "#ff69b4"}} required/>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Time" name="time" style={{color: "#ff69b4"}} required/>
            </div>
            <div className="dropdown" style={{textAlign: "center"}}>
                   <select name="guestCount" style={{color: "#ff69b4"}}>
                       <option name="" value="">Guest Count</option>
                       <option name="guestCount" value="2" style={{color: "#ff69b4"}}>2</option>
                       <option name="guestCount" value="4" style={{color: "#ff69b4"}}>4</option>
                       <option name="guestCount" value="6" style={{color: "#ff69b4"}}>6</option>
                       <option name="guestCount" value="8" style={{color: "#ff69b4"}}>8</option>
                       <option name="guestCount" value="10" style={{color: "#ff69b4"}}>10</option>
                       <option name="guestCount" value="12" style={{color: "#ff69b4"}}>12</option>
                   </select>
            </div>
            <div className="dropdown" style={{textAlign: "center"}}>
                   <select name="theme" style={{color: "#ff69b4"}}>
                       <option name="" value="">Theme</option>
                       <option name="theme" value="aqua" style={{color: "#ff69b4"}}>Aqua</option>
                       <option name="theme" value="boho" style={{color: "#ff69b4"}}>Boho</option>
                       <option name="theme" value="goldenYellow" style={{color: "#ff69b4"}}>Golden Yellow</option>
                       <option name="theme" value="hotPink" style={{color: "#ff69b4"}}>Hot Pink</option>
                       <option name="theme" value="peach" style={{color: "#ff69b4"}}>Peach</option>
                       <option name="theme" value="mauve" style={{color: "#ff69b4"}}>Mauve</option>
                       <option name="theme" value="red" style={{color: "#ff69b4"}}>Red</option>
                       <option name="theme" value="sage" style={{color: "#ff69b4"}}>Sage</option>
                   </select>
            </div>
            <div>
                <label style={{color: "#ff69b4", fontSize: 15}}>
                    <input type="checkbox" name="addOns" value="balloon"/>Balloons
                </label>
                <label style={{color: "#ff69b4", fontSize: 15}}>
                    <input type="checkbox" name="addOns" value="charcuterieBoard"/>Charcuterie Board
                </label>
            </div>
            <div style={{textAlign: "center", color: "#ff69b4"}}>
                <input type="file" name="file" id="file" placeholder="Upload File" />
            </div>
            <div style={{textAlign: "center"}}>
                <textarea placeholder="Message (Optional)" name="message" style={{color: "#ff69b4"}}></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div style={{textAlign: "center"}}>
                <button type="submit" style={{color: "#ff69b4"}}>Submit</button>
            </div>
        </form>
  </div>
  )
}

export default BookingScreen
