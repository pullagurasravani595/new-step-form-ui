import IncreaseStep from '../../context/IncreaseStep'
import StepOne from '../StepOne'
import StepTwo from '../StepTwo'
import StepThree from '../StepThree'
import SuccessView from '../SuccessView'

const RenderSuccessView = () => (
  <IncreaseStep.Consumer>
    {value => {
      const {step} = value
      const uiView = () => {
        switch (step) {
          case 1:
            return <StepOne />
          case 2:
            return <StepTwo />
          case 3:
            return <StepThree />
          case 4:
            return <SuccessView />
          default:
            return null
        }
      }
      return <div>{uiView()}</div>
    }}
  </IncreaseStep.Consumer>
)

export default RenderSuccessView
