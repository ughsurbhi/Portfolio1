import "./Form.css"
import React, {useState} from 'react'

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submission,setSubmission]=useState(null);
  const handleSubmit =async(e)=>{
    e.preventDefault();
    if(name.trim()===''||email.trim()===''||message.trim()===''){
      alert('Please fill out all fields');
      return;
    }
    let custommessage = `Name: ${name}%0AEmail:${email}%0AMessage:${message}`
          let url = `https://api.telegram.org/bot7165926545:AAGf24Zxi2Rk7SBZx9CI8QUwDMv8COG_Liw/sendMessage?chat_id=-1002159383571&text=${custommessage}`
    try{
      let response=await fetch(url);
      let data=await response.json();
      console.log(data);
      setSubmissionStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }
    catch (error) {
      console.error('Error submitting the form:', error);
      setSubmissionStatus('error');
    }
  };
  return (
    <div className="form">
      {submissionStatus === 'success' && <p className="success-message">Message sent successfully!</p>}
      {submissionStatus === 'error' && <p className="error-message">An error occurred. Please try again later.</p>}
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <label>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="6"
          placeholder="Type your message here"
        />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form