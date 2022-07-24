import React from 'react';
//import ReactPlayer from 'react-player'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function HomeScreen() {

    return (
    <div>
        <div style={{marginTop: 25}}>
      <Carousel autoPlay infiniteLoop interval={5000} showArrows showIndicators={false} showStatus={false} showThumbs={false} height="auto" width="100%">
      <div>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: "auto", width: "100%"}}/>
      </div>   
      <div>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: "auto", width: "100%"}}/>
      </div> 
      <div>
          <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: "auto", width: "100%"}}/>
      </div> 
     </Carousel>
     </div>
      <div style={{textAlign: "center", marginTop: 15, color: "#ff69b4", fontSize: 35}}>
       About
       <div style={{marginTop: 5, fontSize: 25}}>
           DecorativeLily was created in 2022 after one of my son's became engaged. He requested my help in finding special ways to propose to his beautiful girlfriend at an out of state beach. Since I knew my hands were tied with not being able to take any of my handmade products on the plane, we had to look for event planners to help us plan it and thats when we came across a family owned company who set up picnics at the beach. With their help, we were able to make his proposal extra special. It was such a beautiful picture perfect setting and I knew that I wanted to do something similar here in the DFW area to help people plan out their memorable moments. My love of entertaining, crafting, sewing, and recently new woodworking hobby, came to play by me making my own products from picnic tables, sewing pillow covers, signs, etc. There was no question that this was a great business idea for me as I would love to help make great memories for my customers.
       </div>
      </div>
      <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4", fontSize: 35}}>
          Gallery
      </div>
      <div style={{textAlign: "center", marginTop: 5}}>
        <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: "auto", width: "100%"}}></img>
        <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: "auto", width: "100%"}}></img>
        <img src="/images/decorativelily.JPG" alt="Decorativelily" style={{height: "auto", width: "100%"}}></img>
      </div>
      <div style={{textAlign: "center", color: "#ff69b4", marginTop: 50, fontSize: 35}}>
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
      <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4", fontSize: 35}}>
            Picnic Booking Request
        </div>
        <div>
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
                       <option name="" value="" disabled="disabled">Theme</option>
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
            <div style={{textAlign: "center", color: "#ff69b4"}}> Add Ons (Optional)
                <label style={{color: "#ff69b4"}}>
                    <input type="checkbox" name="addOns" value="balloon"/>Balloons
                </label>
                <label style={{color: "#ff69b4"}}>
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
      <div style={{textAlign: "center", color: "#ff69b4", marginTop: 50, fontSize: 35}}>
          FAQ 
          <div style={{marginTop: 25, fontSize: 25}}>
            Q: How do I schedule a picnic?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: Please fill out a picnic booking request and we will contact you with 24-48 hours with further details.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: How much does a picnic cost?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: The cost of a picnic depends on the package selected, number of guests, and add on items requested. Deposits are due at time of reservation with remaining amount paid 48 hours prior to scheduled date.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: What does my picnic include?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: All picnics include at least 1 table, table settings, table decorations, silverware, drinkware, napkins, pillows for seating, throw rugs, teepee, and umbrella. Add-ons are available for an extra fee.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: What if I need to cancel my picnic?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: Refunds are issued if a notice of cancellation is provided at least a week in advance minus the deposit fee. If cancellation due to bad weather, picnic can be relocated to indoor location or rescheduled for a future date.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: Where can I have a picnic?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: Picnic locations include homes, lakes, parks, etc. throughout the () areas that do not require permits or other additonal fees.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: How long is a picnic?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: Picnics are slotted for 2 hours with the option to extend for an additonal fee.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: How far in advance do I need to schedule picnic?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: ASAP. Dates and times are filling up quickly.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: Why a Decorativelily picnic?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: Special occassions do not happen every day and we can help provide memorable experiences.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: Is alcohol allowed?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: We do not provide alcohol or assume any responsibility for violations.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: Do I need to cleanup after picnic?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: No. We will take care of the setup and cleanup process. All you need to do is show up.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: Do you provide food/drinks for picnic?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: You are more than welcome to bring your own foods and drinks. For an additional fee you can request a chacuterie board, dessert board, and/or fruit tray.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: How do I pay for picnic?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: We will be in contact with you regarding deposit of $75 due at time of reservation as well as with remaining amount including refundable security deposit due 48 hours before schedule date.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: What if I damage picnic item(s)?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: We expect items to be maintained in same condition as delivered with extra fees being charged for any damaged items.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: What areas of DFW do you service?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: We service the following areas of DFW: Argyle, Bedford, Colleyville, Euless, Flower Mound, Grapevine, Haltom, Justin, Keller, North Richland Hills, Roanoke, Saginaw, Southlake, Trophy Club, and Watauga. We also serve surrounding areas for an extra charge.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
          Q: What if I finish picnic early?
          </div>
          <div style={{marginTop: 5, fontSize: 25}}>
          A: A 30 minute notification is required so we can return to reassume responsibility for items.
          </div>
          <div style={{marginTop: 25, fontSize: 25}}>
              If you have any other questions please email us at decorativelily@gmail.com
          </div>
      </div>
      <div>
      <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4", fontSize: 35}}>
        Contact Us
      </div>
      <form className="form" name="contact" method="POST" data-netlify="true" style={{}}>
        <input type="hidden" name="form-name" value="contact" />
      <div style={{textAlign: "center"}}>
        <input type="text" placeholder="Name" name="name" required/>
      </div>
      <div style={{textAlign: "center"}}>
        <input type="text" placeholder="Email" name="email" required/>
      </div>
      <div style={{textAlign: "center"}}>
        <input type="text" placeholder="Phone Number" name="phoneNumber" required/>
      </div>
      <div style={{textAlign: "center"}}>
        <textarea placeholder="Message" name="message"></textarea>
      </div>
      <div style={{textAlign: "center"}}>
        <button type="submit" style={{color: "#ff69b4"}}>Submit</button>
      </div>
      </form>
      </div>
      <div class="row center" style={{marginTop: 35}}>
            <div class="container" style={{textAlign: "center"}}>
                  <div class="form-group">
                      <form className="form" name="newsletter" method="POST" data-netlify="true" style={{}}>
                      <input type="hidden" name="form-name" value="newsletter" />
                      <div>
                    <input
                      type="text"
                      name="email"
                      placeholder="Sign Up For Newsletter"
                      style={{width: 165}}
                    />
                    </div>
                    <button type="submit" style={{color: "#ff69b4"}}>
                    Submit
                  </button>
                  </form>
                  </div>
              </div>
        </div>
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
            <a href="https://www.snapchat.com/add/decorativelily" class="btn social-icon button" data-abc="true">
                <i style={{color: "#C13584", fontSize: 25, paddingRight: 15}} class="fa fa-snapchat btn-round fa-lg"></i>
            </a>
            <a href="https://www.youtube.com/channel/UClslCAFh26m4yGcviIGgDhQ" class="btn social-icon button" data-abc="true">
              <i style={{color: "#C13584", fontSize: 25, paddingRight: 15}} class="fa fa-youtube btn-round fa-lg"></i>
            </a>
            <a href="https://www.tiktok.com/@decorativelily" class="" data-abc="">
                <img src="/images/tiktok.JPG" alt="Decorativelily TikTok" style={{height: 25, paddingRight: 15}}/>
            </a>
            <a href="https://www.pinterest.com/decorativelily/" class="btn social-icon button" data-abc="true">
                <i style={{color: "#C13584", fontSize: 25, paddingRight: 15}} class="fa fa-pinterest btn-round fa-lg"></i>
            </a>
        </div>
      </div>
    )
}

export default HomeScreen

/*
 <div style={{alignItems: "center"}}>
        <ReactPlayer url="https://www.youtube.com/shorts/L4hmH-tYhMc" />
      </div>
*/