import './ChildrenProps.css'
import React from 'react'

const ChildrenProps = ({children}) => {
  return (
    <>
        <div className='App'>
            <div>Este é o título do componente</div>
        </div>
        <div className='App'>
            {children}
        </div>
    </>
  )
}
export { ChildrenProps }
export default ChildrenProps