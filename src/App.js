import {Component} from 'react'
import IncreaseStep from './context/IncreaseStep'
import RenderSuccessView from './components/RenderSuccessView'
import './App.css'

class App extends Component {
  state = {step: 1, status: false}

  increasedStep = () => {
    this.setState(prevState => ({step: prevState.step + 1}))
  }

  decreasedStep = () => {
    this.setState(prevState => ({step: prevState.step - 1}))
  }

  changeStatus = () => {
    this.setState({status: true})
  }

  render() {
    const {step, status} = this.state
    console.log(status)

    return (
      <IncreaseStep.Provider
        value={{
          step,
          status,
          increasedStep: this.increasedStep,
          decreasedStep: this.decreasedStep,
          changeStatus: this.changeStatus,
        }}
      >
        <div className="app-container">
          {status === false && <h1 className="app-heading">register</h1>}
          <RenderSuccessView />
        </div>
      </IncreaseStep.Provider>
    )
  }
}

export default App
