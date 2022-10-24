import React from 'react'
import './FunctionInProp.css'

const FunctionInProp = ({myFunction}) => {
  return (
    <div className='App'>
        <button onClick={myFunction}>Clique aqui para executar!</button>
    </div>
  )
}
export { FunctionInProp }
export default FunctionInProp