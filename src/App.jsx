import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillWidget from './SkillWidget'
import Avatar from './Avatar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <Avatar/>
        <h1>
          Hikmawan Zulfi
          </h1>
          <div className='a1'>
            Hi I'm mobile software engineer, but currently I challange my self to love and learn web development that I hate before.
          </div>
          <div className='skill-list'>
          <SkillWidget name='Flutter' color='cyan'/>
          <SkillWidget name='Spring' color='red'/>
          <SkillWidget name='Javascript' color='orange'/>    
          </div>
      </div>
    </>
  )
}

export default App

