import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'

function App() {
  const [num, setNum] = useState(0)

  return (
    <div>
      <h1 className=' text-3xl text-orange-700 font-semibold text-center underline'>Counter Update</h1>
      <h1 className=' text-center text-3xl font-bold mt-2'>Count {num}</h1>
      <Button text={"+1"} onClick={() => setNum(num + 1)} />
      <Button text={"+2"} onClick={() => setNum(num + 2)} />
      <Button text={"+3"} onClick={() => setNum(num + 3)} />
      <Button text={"+4"} onClick={() => setNum(num + 4)} />
    </div>
  )
}

export default App
