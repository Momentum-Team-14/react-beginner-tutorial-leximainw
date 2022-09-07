import {useState} from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  return (
    <div className={`react-root ${color}`}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <button className='red' onClick={() => setColor('red')}>red</button>
        <button className='yellow' onClick={() => setColor('yellow')}>yellow</button>
        <button className='blue' onClick={() => setColor('blue')}>blue</button>
      </div>
    </div>
  );
}

export default App;
