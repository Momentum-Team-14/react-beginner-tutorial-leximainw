import {useState} from 'react';
import './App.css';
import ColorChangeButton from './ColorChangeButton';

function App() {
  const [color, setColor] = useState('');
  return (
    <div className={`react-root ${color}`}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <ColorChangeButton color='black' setColor={setColor} />
        <ColorChangeButton color='red' setColor={setColor} />
        <ColorChangeButton color='green' setColor={setColor} />
        <ColorChangeButton color='yellow' setColor={setColor} />
        <ColorChangeButton color='blue' setColor={setColor} />
        <ColorChangeButton color='magenta' setColor={setColor} />
        <ColorChangeButton color='cyan' setColor={setColor} />
        <ColorChangeButton color='white' setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
