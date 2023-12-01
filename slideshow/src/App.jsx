import { useState } from 'react'
import './App.css'
import { Slideshow } from './Slideshow'
import filmData from './data/mega-film-data.json'

function App() {
  // const [index, setIndex] = useState(0);

  // const next = () => {
  //   setIndex(index + 1);
  // }

  // const back = () => {
  //   setIndex(index - 1);
  // }
  
  return (
  <>
    <h1>Studio Ghibli</h1>
  <Slideshow/>
  {/* <div className='buttons'>
    <button>Start Over</button>
    <button onClick={ back }>Back</button>
    <button onClick={ next }>Next</button>
  </div> */}
  </>
  )
}

export default App
