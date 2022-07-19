import React, { useState } from 'react';

function HomeScreen() {
    const [balloon, setBalloon]=useState('');
    const [charcuterieBoard, setCharcuterieBoard]=useState('');

    const handleChange=(data)=>{
        if(data==="balloon")
        {
            if(balloon===true){
                console.log(data, "balloon")
            }
            setBalloon(!balloon)
        }
        if(data==="charcuterieBoard")
        {
            if(charcuterieBoard===true){
                console.log(data, "charcuterieBoard")
            }
            setCharcuterieBoard(!charcuterieBoard)
        }
    }
    return (
    <div>
      <div style={{marginTop: 35, textAlign: "center"}}>
        <img src='/images/decorativelily.JPG' alt="Decorativelily" height="auto" width="100%" />
      </div>
        <div style={{textAlign: "center", marginTop: 50, color: "#ff69b4"}}>
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
            <div style={{textAlign: "center"}}>
                <input type="text" placeholder="Occassion" name="occassion" style={{color: "#ff69b4"}}/>
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
            <div style={{textAlign: "center"}}>
            <div>
                <label htmlFor="balloon">Balloons</label>
                    <input type="checkbox" id="balloon" placeholder="balloon" name="balloon" value={balloon} onChange={(e)=> setBalloon(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="charcuterieBoard">Charcuterie Board</label>
                    <input type="checkbox" id="charcuterieBoard" placeholder="charcuterieBoard" name="charcuterieBoard" value={charcuterieBoard} onChange={(e)=>setCharcuterieBoard(e.target.value)}/>
                </div>
                <div>
                    <textarea placeholder="Message" name="message" style={{color: "#ff69b4"}}></textarea>
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                <button type="submit" style={{color: "#ff69b4"}}>Submit</button>
            </div>
        </form>
        <div className="row center" style={{flex: "row", marginTop: 50}}>
            <a href="https://www.facebook.com/decorativelily" class="btn social-icon button" data-abc="true">
                <i style={{color: "#C13584", paddingRight: 15, fontSize: 25}} class="fa fa-facebook btn-round fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/decorativelily" class="btn social-icon button" data-abc="true">
                <i style={{color: "#C13584", fontSize: 25}} class="fa fa-instagram btn-round fa-lg"></i>
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