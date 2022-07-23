import React from 'react'

function ContactUsScreen() {
  return (
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
    <div style={{textAlign: "center"}}>
            <section>
                <button>
                <a href="tel:8179753597" style={{color: "#ff69b4"}}>
                    Call
                </a>
                </button>
                <button>
                <a href="sms:8179753597" style={{color: "#ff69b4"}}>
                    Text
                </a>
                </button>
            </section>
        </div>
  </div>
  )
}

export default ContactUsScreen