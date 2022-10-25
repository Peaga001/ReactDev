import React, { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

    /* Gerenciamento de dados */

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>
                        <span>Nome:</span>
                        <input 
                            type="text" 
                            name='name' 
                            placeholder='Digite seu nome' 
                            onChange={(e) => setName(e.target.value)} 
                            value={name}/>
                    </label>
                </div>

                <div>
                    <label>
                        <span>Email:</span>
                        <input 
                            type="text" 
                            name='email' 
                            placeholder='Digite seu email' 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}/>
                    </label>
                </div>

                <input type="submit" value="enviar" />
            </form>
        </div>
    )
}

export { MyForm }
export default MyForm