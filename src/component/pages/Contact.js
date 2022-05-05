import React, { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import SuccessAnimation from "actually-accessible-react-success-animation"

const Contact = () => {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [captchaValue, setCaptchaValue] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [captchaError, setCaptchaError] = useState("")
  const [ok, setOk] = useState(false)
  const [showOk, setShowOk] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    message: "",
  })

  function sendEmail(e) {
    e.preventDefault()
    if (!formValues.first_name) {
      setErrorMessage({
        first_name: "Please enter first name",
      })
    } else if (!formValues.last_name) {
      setErrorMessage({
        last_name: "Please enter last name",
      })
    } else if (!formValues.user_email) {
      setErrorMessage({
        user_email: "Please enter email",
      })
    } else if (!formValues.message) {
      setErrorMessage({
        message: "Please enter message",
      })
    } else {
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
            setOk(true)
            setTimeout(() => {
              setShowOk(true)
            }, 3000)
          })
      } else {
        setCaptchaError("Captcha not matched")
      }
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
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleOkClick=()=>{
    setOk(false)
    setFormValues({
      first_name: "",
    last_name: "",
    user_email: "",
    message: "",
    })
  }
  return (
    <div className="contact-container">
      {ok ? (
        <div className="animation-success">
          <SuccessAnimation
            text="Message sent successfully"
            color="#5cb85c"
            liveRegion="live"
          />
          <button
            className={`success-btn ${showOk ? "btn-show" : ""}`}
            onClick={handleOkClick}
          >
            Ok
          </button>
        </div>
      ) : (
        <div>
          <h1>Contact us</h1>
          <form onSubmit={sendEmail}>
            <div className="input-label">
              <label htmlFor="">First Name*</label>
              <input
                type="text"
                name="first_name"
                value={formValues.first_name}
                onChange={handleChange}
              />
              <span className="error-msg">{errorMessage.first_name}</span>
            </div>
            <div className="input-label">
              <label htmlFor="">Last Name*</label>
              <input
                type="text"
                name="last_name"
                value={formValues.last_name}
                onChange={handleChange}
              />
              <span className="error-msg">{errorMessage.last_name}</span>
            </div>
            <div className="input-label">
              <label htmlFor="">Email*</label>
              <input
                type="email"
                name="user_email"
                value={formValues.user_email}
                onChange={handleChange}
              />
              <span className="error-msg">{errorMessage.user_email}</span>
            </div>
            <div className="input-label">
              <label htmlFor="">Message*</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
              <span className="error-msg">{errorMessage.message}</span>
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
