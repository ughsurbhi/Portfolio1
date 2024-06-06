import "./Form.css"
import React, {useState} from 'react'

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  return (
    <div className="form">
      <form

        onSubmit={async (e) => {
          e.preventDefault();
          let custommessage = `Name: ${name}%0AEmail:${email}%0AMessage:${message}`
          let url = `https://api.telegram.org/bot7165926545:AAGf24Zxi2Rk7SBZx9CI8QUwDMv8COG_Liw/sendMessage?chat_id=-1002159383571&text=${custommessage}`
          let response = await fetch(url);
          let data = await response.json();
          console.log(data);
        }}
      >
        <label>Your Name</label>
        <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"></input>
        <label>Email</label>
        <input         
        value={email}
        onChange={(e) => setEmail(e.target.value)} type="email"></input>
        <label>message</label>
        <textarea         
        value={message}
        onChange={(e) => setMessage(e.target.value)} rows="6" placeholder="Type your message here"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form