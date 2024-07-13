import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3ImgAlt: 'Easy Access Image Alt Text',
  feature1Title: 'Downloadable Content',
  feature2ImgAlt: 'Comprehensive Guides Image Alt Text',
  feature3Title: 'Easy Access',
  feature3Description:
    'User-friendly interface for seamless navigation and quick downloads',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1619785699068-c8225c74ae46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyNzE5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1607482854535-e6beda7bbfbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyNzE5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Comprehensive Guides',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1552645265-1d8c244be6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDYyNzE5Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Get detailed guides to help you with all your requirements',
  feature1ImgAlt: 'Downloadable Content Image Alt Text',
  feature1Description:
    'Access a wide range of downloadable content for your needs',
}

Features25.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default Features25
