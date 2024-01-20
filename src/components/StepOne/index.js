import {useState} from 'react'
import IncreaseStep from '../../context/IncreaseStep'
import './index.css'

const StepOne = () => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [gender, setGender] = useState('Male')

  const changeLastName = event => {
    setLastName(event.target.value)
  }

  const changeFirstName = event => {
    setFirstName(event.target.value)
  }

  const changeGender = event => {
    setGender(event.target.value)
  }

  console.log(firstName)
  console.log(lastName)
  console.log(gender)

  return (
    <IncreaseStep.Consumer>
      {value => {
        const {increasedStep} = value

        const stepOneNextBtn = () => {
          increasedStep()
        }

        return (
          <div className="step-one-container">
            <h1 className="step-one-heading">Personal Info:</h1>
            <div className="input-label-container">
              <label htmlFor="firstName" className="label-one">
                FirstName:
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="first Name"
                className="step-one-input"
                onChange={changeFirstName}
                value={firstName}
              />
            </div>
            <div className="input-label-container">
              <label htmlFor="lastName">LastName:</label>
              <input
                type="text"
                id="lastName"
                placeholder="last Name"
                className="step-one-input"
                onChange={changeLastName}
                value={lastName}
              />
            </div>
            <div>
              <h1 className="gender">gender:</h1>
              <input
                type="radio"
                name="gender"
                id="genderMale"
                value="Male"
                onChange={changeGender}
              />
              <label htmlFor="genderMale">Male</label>
              <input
                type="radio"
                name="gender"
                id="genderFemale"
                value="Female"
                onChange={changeGender}
              />
              <label htmlFor="genderFemale">Female</label>
            </div>
            <button
              type="button"
              onClick={stepOneNextBtn}
              className="step-one-btn"
            >
              Next
            </button>
          </div>
        )
      }}
    </IncreaseStep.Consumer>
  )
}

export default StepOne
