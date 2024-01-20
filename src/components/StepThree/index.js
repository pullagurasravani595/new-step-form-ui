import {useState} from 'react'
import IncreaseStep from '../../context/IncreaseStep'
import './index.css'

const StepThree = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const changeUsername = event => {
    setUsername(event.target.value)
  }

  const changePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <IncreaseStep.Consumer>
      {value => {
        const {decreasedStep, increasedStep, changeStatus} = value

        const stepTwoPreviousBtn = () => {
          decreasedStep()
        }

        const changeUserStatus = () => {
          increasedStep()
          changeStatus()
        }

        return (
          <div className="step-three-container">
            <h1 className="step-three-heading">login Info:</h1>
            <div className="input-label-container-three">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="step-three-input"
                onChange={changeUsername}
                value={username}
              />
            </div>
            <div className="input-label-container-three">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter the password"
                className="step-three-input"
                onChange={changePassword}
                value={password}
              />
            </div>
            <div className="step-three-btn-container">
              <button
                type="button"
                onClick={stepTwoPreviousBtn}
                className="step-three-btn step-three-previous-btn"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={changeUserStatus}
                className="step-three-btn"
              >
                submit
              </button>
            </div>
          </div>
        )
      }}
    </IncreaseStep.Consumer>
  )
}

export default StepThree
