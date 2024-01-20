import React from 'react'

const IncreaseStep = React.createContext({
  step: 1,
  status: false,
  increasedStep: () => {},
  decreasedStep: () => {},
  changeStatus: () => {},
})

export default IncreaseStep
