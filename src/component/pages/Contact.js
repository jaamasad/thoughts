import React, {useState} from "react"
import emailjs from "emailjs-com"
const Contact = () => {
  const [loading, setLoading]=useState(false)
  const handleClick = ()=>{
    setLoading(true)
  }
  function sendEmail(e) {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_cn4urob",
        "template_8h5pcsv",
        e.target,
        "xRHklco6OumbgXyLv"
      )
      .then((res) => {
        setLoading(false)
        alert("Message sent");
      })
  }
  return (
    <div className="contact-container">
      <h1>Contact us</h1>
      <form onSubmit={sendEmail}>
        <div className="input-label">
          <label htmlFor="">First Name*</label>
          <input type="text" name="first_name" required />
        </div>
        {/* <div className="input-label">
          <label htmlFor="">Last Name*</label>
          <input type="text" name="lastName" />
        </div> */}
        <div className="input-label">
          <label htmlFor="">Email*</label>
          <input type="email" name="email" />
        </div>
        <div className="input-label">
          <label htmlFor="">Message*</label>
          <textarea name="message" id="" cols="30" rows="5"></textarea>
        </div>
        {/* <div className="input-label captcha-box">
          <label htmlFor="">Enter Code Above*</label>
          <div className="captcha-container">
            <span className="captcha">t5Kx</span>
            <input type="text" name="captcha" />
          </div>
        </div> */}
        <input type="submit" value={loading ? "Sending..." : "Send"} className="submit" onClick={handleClick} />
      </form>
    </div>
  )
}
export default Contact
