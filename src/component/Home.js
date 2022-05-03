import React, { useState, forwardRef, useRef, useEffect } from "react"
// import Print from "./Print"
import thoughtsList from "../assets/DateData"
import Social from "./Social"
import ReactToPrint, { PrintContextConsumer } from "react-to-print"

const THOUGHTS = {
  thoughtHeading: "You are a natural",
  thoughtDesc: "Organize a toy drive this holiday season",
}
const Home = ({show}) => {
  const [bgColor, setBgColor] = useState("")
  const [edit, setEdit] = useState(false)
  const [share, setShare] = useState(false)
  const [tHeading, setTHeading] = useState("")
  const [tDescription, setTDescription] = useState(THOUGHTS.thoughtDesc)
  const [thoughts, setThoughts] = useState({
    thoughtHeading: "",
    thoughtDesc: THOUGHTS.thoughtDesc,
  })
  console.log(show)
  let today = new Date()
  let dd = String(today.getDate())
  let mm = String(today.getMonth() + 1)
  let yyyy = today.getFullYear()
  today = mm + dd + yyyy
  // console.log(today)
  const ref = useRef()
  useEffect(() => {
    for (let i = 0; i < thoughtsList.length; i++) {
      for (let x = 0; x < i; x++) {
        if (thoughtsList[i][0] == today) {
          setTHeading(thoughtsList[i][1])
          break
        }
      }
    }
  }, [])

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
      <div className="print-container" ref={ref}>
        <div className={`message-box main-box ${bgColor}`}>
          <div>
            <p>{tHeading}</p>
            <p>{thoughts.thoughtDesc}</p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="home-container">
      <header className={`${show ? "show": ""}`}>
        <div className="menu">
          <div className="pencil menu-item mobile-none" />
          {!edit ? (
            <div className="pencil menu-item" onClick={handleEdit}>
              <img src="/images/pencil.svg" alt="pencil" />
            </div>
          ) : (
            <div className="pencil menu-item" />
          )}
          {!edit ? (
          <ReactToPrint content={() => ref.current}>
            <PrintContextConsumer>
              {({ handlePrint }) => (
                <div className="print menu-item" onClick={handlePrint}>
                  <img src="/images/print.svg" alt="print" />
                </div>
              )}
            </PrintContextConsumer>
          </ReactToPrint>
          ):(
            <div className="pencil menu-item" />
          )}
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
      {edit ? (
        <div className={`message-box ${bgColor}`}>
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
        </div>
      ) : (
        <ComponentToPrint ref={ref} />
      )}
    </div>
  )
}
export default Home
