import React from "react"
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact us</h1>
      <form action="">
        <div className="input-label">
          <label htmlFor="">First Name*</label>
          <input type="text" name="firstName" />
        </div>
        <div className="input-label">
          <label htmlFor="">Last Name*</label>
          <input type="text" name="lastName" />
        </div>
        <div className="input-label">
          <label htmlFor="">Email*</label>
          <input type="text" name="firstName" />
        </div>  
        <div className="input-label">
          <label htmlFor="">Message*</label>
          <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div className="input-label captcha-box">
          <label htmlFor="">Enter Code Above*</label>
          <div className="captcha-container">
            <span className="captcha">t5Kx</span>
            <input type="text" name="captcha" />
          </div>
        </div>
        <button className="submit">Submit</button>
      </form>
    </div>
  )
}
export default Contact
