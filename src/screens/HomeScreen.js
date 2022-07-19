import React from 'react';
import ReactPlayer from 'react-player'

function HomeScreen() {

    return (
    <div>
      <div style={{marginTop: 35, textAlign: "center"}}>
        <img src='/images/decorativelily.JPG' alt="Decorativelily" height="auto" width="100%" />
      </div>
      <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4", fontSize: 50}}>
       Our Story
       <div style={{marginTop: 5, fontSize: 25}}>
           Decorativelily was created in 2022 after one of my son's became engaged. He requested my help in finding special ways to propose to his beautiful girlfriend at an out of state beach. Since I knew my hands were tied with not being able to take any of my handmade products on the plane, we had to look for event planners to help us plan it and thats when we came across a family owned company who set up picnics at the beach. With their help, we were able to make his proposal extra special. It was such a beautiful picture perfect setting and I knew that I wanted to do something similar here in the DFW area to help people plan out their memorable moments. My love of entertaining, crafting, sewing, and recently new woodworking hobby, came to play by me making my own products from picnic tables, sewing pillow covers, signs, etc. There was no question that this was a great business idea for me as I would love to help make great memories for my customers.
       </div>
      </div>
      <div style={{textAlign: "center", color: "#ff69b4", fontSize: 50, marginTop: 50}}>
          Gallery
          <div style={{marginTop: 5}}>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: 200, width: 300}}></img>
          </div>
      </div>
      <div>
        <ReactPlayer url="https://www.youtube.com/shorts/L4hmH-tYhMc" height="500px" width="1000px" style={{ marginLeft: "25%", marginTop: 50}} />
      </div>
      <div style={{textAlign: "center", color: "#ff69b4", marginTop: 50, fontSize: 50}}>
          Packages
          <div style={{textAlign: "center", color: "#ff69b4", fontSize: 25, marginTop: 10}}>
            Picnic For 2
          </div>
          <div style={{textAlign: "center", color: "#ff69b4", fontSize: 25, marginTop: 10}}>
            Picnic For 4
          </div>
          <div style={{textAlign: "center", color: "#ff69b4", fontSize: 25, marginTop: 10}}>
            Picnic For 5-8
          </div>
          <div style={{textAlign: "center", color: "#ff69b4", fontSize: 25, marginTop: 10}}>
            Picnic For 9-12
          </div>
      </div>
      <div style={{textAlign: "center", color: "#ff69b4", marginTop: 50, fontSize: 50}}>
          FAQ 
          <div style={{marginTop: 10, fontSize: 25}}>
            HOW DO I BOOK A PICNIC?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          Fill out our booking form
          </div>
          <div style={{marginTop: 10, fontSize: 25}}>
          WHAT DOES MY PICNIC INCLUDE?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          We currently offer picnic packages suitable for 2-12 people that includes...
          </div>
          <div style={{marginTop: 10, fontSize: 25}}>
          WHAT IS YOUR CANCELLATION POLICY?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          If you need to reschedule your picnic due to weather or other unforseen circumstances, we can apply your funds to another date within the calendar year. We do require 24 hours notice upon rescheduling due to weather.
          </div>
      </div>
        <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4", fontSize: 50}}>
            Picnic Booking Request
        </div>
        <div>
            <form className="form" name="contact-form" method="POST" data-netlify="true" style={{}}>
                <input type="hidden" name="form-name" value="contact-form" />
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Name" name="name" style={{color: "#ff69b4"}} />
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Email" name="email" style={{color: "#ff69b4"}}/>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Phone Number" name="phoneNumber" style={{color: "#ff69b4"}}/>
            </div>
            <div className="dropdown" style={{textAlign: "center", color: "#ff69b4"}}>
                   <select name="occassion" style={{color: "#ff69b4"}}>
                       <option name="">Occassion</option>
                       <option name="occassion" value="anniversary" style={{color: "#ff69b4"}}>Anniversary</option>
                       <option name="occassion" value="birthday" style={{color: "#ff69b4"}}>Birthday</option>
                       <option name="occassion" value="graduation" style={{color: "#ff69b4"}}>Graduation</option>
                       <option name="occassion" value="wedding" style={{color: "#ff69b4"}}>Wedding</option>
                   </select>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Date" name="date" style={{color: "#ff69b4"}}/>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Location" name="location" style={{color: "#ff69b4"}}/>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Time" name="time" style={{color: "#ff69b4"}}/>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Guest Count" name="guestCount" style={{color: "#ff69b4"}}/>
            </div>
            <div>
                <label style={{color: "#ff69b4"}}>
                    <input type="checkbox" name="addOns" value="balloon"/>Balloons
                </label>
                <label style={{color: "#ff69b4"}}>
                    <input type="checkbox" name="addOns" value="charcuterieBoard"/>Charcuterie Board
                </label>
            </div>
            <div style={{textAlign: "center"}}>
                <textarea placeholder="Message" name="message" style={{color: "#ff69b4"}}></textarea>
            </div>
            <div style={{textAlign: "center"}}>
                <button type="submit" style={{color: "#ff69b4"}}>Submit</button>
            </div>
        </form>
        <div className="row center" style={{flex: "row", marginTop: 50}}>
            <a href="https://www.facebook.com/decorativelily" class="btn social-icon button" data-abc="true">
                <i style={{color: "#C13584", paddingRight: 15, fontSize: 25}} class="fa fa-facebook btn-round fa-lg"></i>
            </a>
            <a href="https://www.twitter.com/decorativelily" class="btn social-icon button" data-abc="true">
              <i style={{color: "#C13584", fontSize: 25, paddingRight: 15}} class="fa fa-twitter btn-round fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/decorativelily" class="btn social-icon button" data-abc="true">
                <i style={{color: "#C13584", fontSize: 25, paddingRight: 15}} class="fa fa-instagram btn-round fa-lg"></i>
            </a>
            <a href="https://www.youtube.com/channel/" class="btn social-icon button" data-abc="true">
              <i style={{color: "#C13584", fontSize: 25}} class="fa fa-youtube btn-round fa-lg"></i>
            </a>
        </div>
      </div>
      </div>
    )
}

export default HomeScreen

/*
 <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4"}}>
          About Us
      </div>
      <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4"}}>
          Packages
      </div>
      <div style={{textAlign: "center"}}>
          Picnic For 2
      </div>
      <div style={{textAlign: "center"}}>
          Picnic For 4
      </div>
      <div style={{textAlign: "center"}}>
          Picnic For 5-8
      </div>
      <div style={{textAlign: "center"}}>
          Picnic For 9-12
      </div>
      <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4"}}>
          FAQ
      </div>
*/

/*
 <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4"}}>
          Gallery
</div>
<div style={{textAlign: "center"}}>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
        <img src="/images/decorativelily.JPG" alt="Picnic" style={{height: 200, width: 300}}></img>
</div>
*/

/*
 <div style={{textAlign: "center", marginTop: 50}}>
        Contact Us
      </div>
      <div>
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
            <textarea placeholder="Message" name="message"></textarea>
        </div>
        <div style={{textAlign: "center"}}>
            <button type="submit">Submit</button>
        </div>
        </form>
      </div>
*/

/*
*/