import './App.css';
import { FormComponent } from './components/FormComponent';
import { useState } from 'react';

function App() {

  const [playerScore, setPlayerScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);

  const onAddNamePlayer = ( namePlayer ) => {

    console.log(`El nombre del jugador es: ${namePlayer}`);
  }

  return (
    <div className="App">
      <FormComponent onNewPlayer={ onAddNamePlayer }></FormComponent>
    </div>
  );
}

export default App;
