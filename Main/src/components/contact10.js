import React from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3 className="contact10-text2 thq-heading-3">{props.location1}</h3>
            <p className="thq-body-large">{props.location1Description}</p>
            <div className="contact10-container2">
              <span className="thq-button-flat thq-body-small">
                Contact Me
              </span>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text5 thq-heading-3">{props.location2}</h3>
            <p className="thq-body-large">{props.location2Description}</p>
            <div className="contact10-container4">
              <span className="thq-button-flat thq-body-small">
                Love to them
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2ImageSrc:
    'https://images.unsplash.com/photo-1544216292-b5417607b70a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyNzE5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2: 'Cluj - Napoca',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1495332711843-da64862d07e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyNzE5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Locations',
  location2ImageAlt: 'image2Alt',
  location1ImageAlt: 'image1Alt',
  content1:
    'Our helpers and supporters.',
  location1Description:
    'Eome, I am the Owner of the Website I develop it actively and hope you like it :)',
  location1: 'Eome (Owner)',
  location2Description:
    'Currently no one, but that can change :)',
}

Contact10.propTypes = {
  location2ImageSrc: PropTypes.string,
  location2: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  location2ImageAlt: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.string,
  location1Description: PropTypes.string,
  location1: PropTypes.string,
  location2Description: PropTypes.string,
}

export default Contact10
