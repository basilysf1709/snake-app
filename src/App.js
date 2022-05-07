import { useState } from 'react';
import Snake from './Snake';
import Food from './Food';


const getRandom = () => {
  return [Math.floor(Math.random()*45)*2,Math.floor(Math.random()*45)*2]
}

const App = () => {
  const [dots, setDots] = useState([
    [0,0], [2,0], [4,0]
  ])
  const [food, setFood] = useState(
    getRandom()
  )
  return (
    <div className="game-area">
      <Snake snakeDots={dots} />
      <Food dot={food} />
    </div>
  )
}

export default App;
