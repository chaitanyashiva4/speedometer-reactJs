// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onclickApplyBreakButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onclickAccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <div className="imageC">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img"
            alt="speedometer"
          />
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              type="button"
              className="accelerate-button button"
              onClick={this.onclickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-break button"
              onClick={this.onclickApplyBreakButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
