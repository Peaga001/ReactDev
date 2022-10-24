import { useState } from 'react';
import './App.css';
import { ChildrenProps } from './components/children-props/ChildrenProps';
import { ConditionalRender } from './components/conditional-render/ConditionalRender';
import { FunctionInProp } from './components/function-in-prop/FunctionInProp';
import { ImgFromAssets } from './components/img-from-assets/ImgFromAssets';
import { ImgFromPublic } from './components/img-from-public/ImgFromPublic';
import { PreviusState } from './components/previus-state/PreviusState';
import ChangeMessageStateLift from './components/state-lift/ChangeMessageStateLift';
import MessageStateLift from './components/state-lift/MessageStateLift';

function App() {

  const fuctionChildrenComponent = () => {
    console.log('hello children!')
  }

  const [message, setMessage] = useState("")

  const handleMessageStateLift = (msg) => {
    setMessage(msg)
  }

  return (
    <>

      <div className='App'>
        <h1> Avançando em React</h1>
      </div>

      <ImgFromPublic/>
    
      <ImgFromAssets/>

      <PreviusState/>

      <ConditionalRender/>

      <ChildrenProps>
        Teste enviando dados pelo childrenProps
      </ChildrenProps>

      <FunctionInProp myFunction={fuctionChildrenComponent} />

      <MessageStateLift message={message}/>

      <ChangeMessageStateLift handleMessage={handleMessageStateLift} />

    </>
      
  );
}

export default App;
