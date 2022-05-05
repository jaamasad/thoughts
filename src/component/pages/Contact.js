import React, { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import SuccessAnimation from "actually-accessible-react-success-animation"

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [captchaValue, setCaptchaValue] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [captchaError, setCaptchaError] = useState("")
  const [ok, setOk] = useState(false)

  function sendEmail(e) {
    e.preventDefault()
    if (inputValue == captchaValue) {
      setLoading(true)
      emailjs
        .sendForm(
          "service_1i7daai",
          "template_bmtc9ff",
          e.target,
          "0-YVWV0bRBJEFuEdh"
        )
        .then((res) => {
          setLoading(false)
          console.log(res)
          setOk(true)
          // window.location.reload(false)
        })
    } else {
      setCaptchaError("Captcha not matched")
    }
  }
  useEffect(() => {
    let text = ""
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    for (let y = 0; y < 5; y++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    setCaptchaValue(text)
  }, [])

  return (
    <div className="contact-container">
      {ok ? (
        <div className="animation-success">
          <SuccessAnimation
            text="Message sent successfully"
            color="#5cb85c"
            liveRegion="live"
          />
          <button className="success-btn" onClick={() => setOk(false)}>
            Ok
          </button>
        </div>
      ) : (
        <div>
          <h1>Contact us</h1>
          <form onSubmit={sendEmail}>
            <div className="input-label">
              <label htmlFor="">First Name*</label>
              <input type="text" name="first_name" required />
            </div>
            <div className="input-label">
              <label htmlFor="">Last Name*</label>
              <input type="text" name="last_name" required />
            </div>
            <div className="input-label">
              <label htmlFor="">Email*</label>
              <input type="email" name="user_email" required />
            </div>
            <div className="input-label">
              <label htmlFor="">Message*</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="input-label captcha-box">
              <label htmlFor="">Enter Code Above*</label>
              <div className="captcha-container">
                <span className="captcha">{captchaValue}</span>
                <input
                  id="captcha"
                  type="text"
                  name="captcha"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <span className="captcha-error">{captchaError}</span>
            </div>
            <input
              type="submit"
              value={loading ? "Sending..." : "Send"}
              className="submit"
            />
          </form>
        </div>
      )}
      <div
        id="live"
        aria-live="polite"
        style={{ opacity: 0, position: "fixed" }}
      />
    </div>
  )
}
export default Contact
