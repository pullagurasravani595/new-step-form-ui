import {useState} from 'react'
import IncreaseStep from '../../context/IncreaseStep'
import './index.css'

const StepTwo = () => {
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const changeEmail = event => {
    setEmail(event.target.value)
  }

  const changePhoneNumber = event => {
    setPhoneNumber(event.target.value)
  }

  return (
    <IncreaseStep.Consumer>
      {value => {
        const {increasedStep, decreasedStep} = value

        const stepTwoNextBtn = () => {
          increasedStep()
        }

        const stepTwoPreviousBtn = () => {
          decreasedStep()
        }

        return (
          <div className="step-two-container">
            <h1 className="step-two-heading">contact Info:</h1>
            <div className="input-label-container-two">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email"
                className="step-two-input"
                onChange={changeEmail}
                value={email}
              />
            </div>
            <div className="input-label-container-two">
              <label htmlFor="phone number">PhoneNumber:</label>
              <input
                type="text"
                id="phone number"
                placeholder="Enter the phone number"
                className="step-two-input"
                onChange={changePhoneNumber}
                value={phoneNumber}
              />
            </div>
            <div className="step-two-btn-container">
              <button
                type="button"
                onClick={stepTwoPreviousBtn}
                className="step-two-btn step-two-previous-btn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={stepTwoNextBtn}
                className="step-two-btn"
              >
                Next
              </button>
            </div>
          </div>
        )
      }}
    </IncreaseStep.Consumer>
  )
}

export default StepTwo
