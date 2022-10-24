import React, { useState } from 'react'
import './ConditionalRender.css'

const ConditionalRender = () => {

    const [x] = useState(true)

    const [name] = useState("Francis")

    return (
    <>
        <div className='App'>

            <h1>Isso será exibido?</h1>
        </div>
        <div className='App'>
            {x && <p>Se X for true, sim!</p>}
        </div>

        <div className='App'>
            {name==="João" ? (
                <div>O nome é João</div>
            ) : (
                <div>O nome não foi encontrado João</div>
            )}
        </div>
    </>
    )
}

export { ConditionalRender }
export default ConditionalRender