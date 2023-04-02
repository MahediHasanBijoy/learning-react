import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './components/title'
import './App.css'

// Every component is a function behind the scene like this
function Button(){
  return <button>Save Now</button>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Hello World</h2>
      <Title></Title>
      <Button></Button>
    </div>
  )
}

export default App
