// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initial: 0,
    }
  }

  rightArrow = () => {
    const {reviewsList} = this.props
    this.setState(pre => ({
      initial:
        pre.initial === reviewsList.length - 1
          ? reviewsList.length - 1
          : pre.initial + 1,
    }))
  }

  leftArrow = () => {
    this.setState(pre => ({initial: pre.initial === 0 ? 0 : pre.initial - 1}))
  }

  render() {
    const {initial} = this.state
    const {reviewsList} = this.props
    const {imgUrl, companyName, username, description} = reviewsList[initial]
    return (
      <div className="review">
        <div className="review-block">
          <h1 className="head">Reviews</h1>
          <div className="arrow-con">
            <button
              onClick={this.leftArrow}
              className="but"
              data-testid="leftArrow"
              type="button"
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <div className="img-user-con">
              <img className="img-con" alt={username} src={imgUrl} />
              <p className="para">{username}</p>
              <p className="para">{companyName}</p>
            </div>
            <button
              onClick={this.rightArrow}
              className="but"
              data-testid="rightArrow"
              type="button"
            >
              <img
                alt="right arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              />
            </button>
          </div>
          <p className="para">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
