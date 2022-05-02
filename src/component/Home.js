import React, { useState, forwardRef, useRef } from "react"
// import Print from "./Print"
import Social from "./Social"
import ReactToPrint, { PrintContextConsumer } from "react-to-print"

const THOUGHTS = {
  thoughtHeading: "You are a natural",
  thoughtDesc: "Organize a toy drive this holiday season",
}
const Home = () => {
  const [bgColor, setBgColor] = useState("")
  const [edit, setEdit] = useState(false)
  const [share, setShare] = useState(false)
  const [tHeading, setTHeading] = useState(THOUGHTS.thoughtHeading)
  const [tDescription, setTDescription] = useState(THOUGHTS.thoughtDesc)
  const [thoughts, setThoughts] = useState({
    thoughtHeading: THOUGHTS.thoughtHeading,
    thoughtDesc: THOUGHTS.thoughtDesc,
  })
  const ref = useRef()
 
  const handleEdit = () => {
    setEdit(true)
  }
  const handleClose = () => {
    setEdit(false)
    setThoughts({
      thoughtHeading: tHeading,
      thoughtDesc: tDescription,
    })
  }
  const handleHeadingOnChange = (e) => {
    setTHeading(e.target.value)
  }
  const handleDescOnChange = (e) => {
    setTDescription(e.target.value)
  }
  const handleShare = () => {
    setShare(!share)
  }
  const ComponentToPrint = forwardRef((props, ref) => {
    return (
      <div className="app-container" ref={ref}>
        <div className={`message-box ${bgColor}`}>
          {edit ? (
            <div className="edit">
              <span className="close" onClick={handleClose}>
                X
              </span>
              <input
                type="text"
                placeholder={thoughts.thoughtHeading}
                value={tHeading}
                onChange={handleHeadingOnChange}
              />
              <input
                type="text"
                placeholder={thoughts.thoughtDesc}
                value={tDescription}
                onChange={handleDescOnChange}
              />
            </div>
          ) : (
            <div>
              <p>{thoughts.thoughtHeading}</p>
              <p>{thoughts.thoughtDesc}</p>
            </div>
          )}
        </div>
      </div>
    )
  })
  return (
    <div className="home-container">
      <header>
        <div className="menu">
        <div className="pencil menu-item" />
          {!edit ? (
            <div className="pencil menu-item" onClick={handleEdit}>
              <img src="/images/pencil.svg" alt="pencil" />
            </div>
          ) : (
            <div className="pencil menu-item" />
          )}
          <ReactToPrint content={() => ref.current}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <div className="print menu-item" onClick={handlePrint}>
                  <img src="/images/print.svg" alt="print" />
                </div>
              )}
            </PrintContextConsumer>
          </ReactToPrint>
          <div className="share menu-item" onClick={handleShare}>
            <img src="/images/share.svg" alt="share" />
          </div>
          {share && <Social thoughts={thoughts} />}
        </div>

        {!edit && (
          <div className="color-palletsmenu-item">
            <span
              className="orange color-icon"
              onClick={() => setBgColor("bg-orange")}
            />
            <span
              className="green color-icon"
              onClick={() => setBgColor("bg-green")}
            />
            <span
              className="blue color-icon"
              onClick={() => setBgColor("bg-blue")}
            />
            <span
              className="white color-icon"
              onClick={() => setBgColor("bg-white")}
            />
          </div>
        )}
      </header>
      <ComponentToPrint ref={ref} />
    </div>
  )
}
export default Home