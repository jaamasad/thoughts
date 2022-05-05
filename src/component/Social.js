import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share"
const Social = ({ thoughts }) => {
  const shareUrl = "https://monumental-youtiao-6fc7cb.netlify.app/"
  const title = thoughts.thoughtHeading + ", " + thoughts.thoughtDesc
  return (
    <div className="Demo__some-network">
      <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
    </div>
  )
}

export default Social
