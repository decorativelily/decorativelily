import React, { useState } from 'react';
//import "./SupportScreen.css";
//import Avatar from "@material-ui/core/Avatar";

function SupportScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "User",
      image: "",
      message: "..."
    },
    {
      message: "...",
    },
    {
      name: "User",
      image: "",
      message: "..."
    },
    {
      message: "...",
  },
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
      <div className="chatScreen">
        <p className="chatScreen_timestamp" style={{textAlign: "center", padding: "20px", color: "gray"}}>
          ...
        </p>
        {messages.map((message) =>
          message.name ? (
            <div className="chatScreen_message" style={{display: "flex", alignItems: "center", padding: "20px"}}>
              <p className="chatScreen_text" style={{marginLeft: "10px", backgroundColor: "lightgray", padding: "15px", borderRadius: "20px"}}>{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen_message" style={{display: "flex", alignItems: "center", padding: "20px"}}>
                <p className="chatScreen_textUser" style={{marginLeft: "auto", backgroundColor: "#ff69b4", padding: "15px", borderRadius: "20px", color: "white"}}>{message.message}</p>
            </div>
          )
        )}
        <form className="chatScreen_input" style={{display: "flex", padding: "5px", position: "fixed", bottom: 0, width: "100%", borderTop: "1px solid lightgray"}}>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chatScreen_inputField"
              placeholder="Type a message..."
              type="text"
              style={{flex: 1, padding: "10px", border: "none", color: "#ff69b4"}}
            />
            <button onClick={handleSend} type="submit" className="chatScreen_inputButton" style={{border: "none", marginRight: "20px", backgroundColor: "white", fontWeight: "bolder", color: "#ff69b4"}}>Submit</button>
        </form>
      </div>
    );
}

export default SupportScreen;

/*
<div className="chatScreen_message">
              <Avatar 
                className="chatScreen_image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen_text">{message.message}</p>
*/
