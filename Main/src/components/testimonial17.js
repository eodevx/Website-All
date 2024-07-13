import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial17-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Name: 'David Johnson',
  heading1: 'What Our Customers Say',
  author3Alt: 'Image of David Johnson',
  author2Position: 'Marketing Manager, XYZ Inc.',
  author3Position: 'Freelancer',
  author4Position: 'Student',
  author4Src:
    'https://images.unsplash.com/photo-1600481453173-55f6a844a4ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyNzE5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    'As a student, this site has been invaluable for my research papers. Thank you for the wealth of information!',
  author2Name: 'Jane Smith',
  author1Alt: 'Image of John Doe',
  author1Src:
    'https://images.unsplash.com/photo-1645378999488-63138abdecd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyNzE5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Sarah Lee',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  author2Src:
    'https://images.unsplash.com/photo-1524008279394-3aed4643b30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyNzE5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  review2:
    'I found everything I needed in one place. Thank you for the excellent resources!',
  author3Src:
    'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyNzE5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Doe',
  review3:
    'The guides provided here have been a lifesaver for my projects. Will definitely be coming back for more!',
  review1: 'Great service and easy to use platform. Highly recommended!',
  author1Position: 'CEO, Company ABC',
  author4Alt: 'Image of Sarah Lee',
}

Testimonial17.propTypes = {
  author3Name: PropTypes.string,
  heading1: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author3Position: PropTypes.string,
  author4Position: PropTypes.string,
  author4Src: PropTypes.string,
  review4: PropTypes.string,
  author2Name: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author4Name: PropTypes.string,
  content1: PropTypes.string,
  author2Src: PropTypes.string,
  author2Alt: PropTypes.string,
  review2: PropTypes.string,
  author3Src: PropTypes.string,
  author1Name: PropTypes.string,
  review3: PropTypes.string,
  review1: PropTypes.string,
  author1Position: PropTypes.string,
  author4Alt: PropTypes.string,
}

export default Testimonial17
