import React from 'react'

const ChangeMessageStateLift = ({handleMessage}) => {

    const messages = ["Oi", "Olá", "Oi tudo bem?"]

    return (
        <div className='App'>
            
            <button onClick={ () => handleMessage(messages[0])}>1</button>

            <button onClick={() => handleMessage(messages[1])}>2</button>

            <button onClick={() => handleMessage(messages[2])}>3</button>

        </div>
    )
}

export default ChangeMessageStateLift