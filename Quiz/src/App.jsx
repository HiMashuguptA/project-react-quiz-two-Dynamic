import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstpage from './Components/Firstpage'
import Secondpage from './Components/Secondpage'
import Thirdpage from './Components/Thirdpage'
import jsonData from './Components/quizQuestion.json'

function App() {
  return (
    // < Firstpage/>
    <Secondpage value={jsonData}/>
    // <Thirdpage/>
  );
}

export default App;