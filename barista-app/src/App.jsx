import { component, useState } from 'react'
import BaristaForm from "./components/BaristaForm";
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="title-container">
        <h1 className="title">On my Grind</h1>
        <p>So you think you can Barista? Let's put it to the test!</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App;
