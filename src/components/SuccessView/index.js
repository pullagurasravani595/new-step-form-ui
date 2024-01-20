import IncreaseStep from '../../context/IncreaseStep'
import './index.css'

const SuccessView = () => (
  <IncreaseStep.Consumer>
    {value => {
      const {status} = value
      return status ? (
        <p className="status-text">your successfully login</p>
      ) : (
        <p className="status-text">Incorrect Details</p>
      )
    }}
  </IncreaseStep.Consumer>
)

export default SuccessView
