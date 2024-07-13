import React from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-links">
            <span style={{ cursor: 'pointer' }} onClick={Link1} className="thq-body-small">{props.link1}</span>
            <span style={{ cursor: 'pointer' }} className="thq-body-small">{props.link2}</span>
            <span style={{ cursor: 'pointer' }} className="thq-body-small">{props.link3}</span>
            <span style={{ cursor: 'pointer' }} className="thq-body-small">{props.link4}</span>
            <span style={{ cursor: 'pointer' }} className="thq-body-small">{props.link5}</span>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-footer-links">
              <span style={{ cursor: 'pointer' }} className="footer4-text6 thq-body-small">
                {props.privacyLink}
              </span>
              <span style={{ cursor: 'pointer' }} className="thq-body-small">{props.termsLink}</span>
              <span style={{ cursor: 'pointer' }} className="thq-body-small">{props.cookiesLink}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  cookiesLink: 'Cookies Policy',
  termsLink: 'Terms and Conditions',
  link3: 'FAQs',
  logoAlt: 'Company Logo',
  privacyLink: 'Privacy Policy',
  link4: 'Contact Us',
  link5: 'About Us',
  link2: 'Guides',
  link1: 'Download Center',
}

Footer4.propTypes = {
  cookiesLink: PropTypes.string,
  termsLink: PropTypes.string,
  link3: PropTypes.string,
  logoAlt: PropTypes.string,
  privacyLink: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  link2: PropTypes.string,
  link1: PropTypes.string,
}

const Link1 = () => {
  window.location = '/HomePage';
}

export default Footer4
