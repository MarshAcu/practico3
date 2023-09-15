import './App.css';
import { FormComponent } from './components/FormComponent';
import { useState, useEffect } from 'react';
import { SelectionComponent } from './components/SelectionComponent';
import { ScoreBoardComponent } from './components/ScoreBoardComponent';

const mod = (a, b) => {
  const c = a % b;
  return c < 0 ? c + b : c;
}

function App() {

  const [playerScore, setPlayerScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [ready, setIsReady] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [result, setResult] = useState(false);
  const [ganador, setGanador] = useState('');
  const carts = ['Piedra', 'Papel', 'Tijera'];

  useEffect(() => {
      setGanador(playerName);
      onWin();
  }, [playerScore == 3 ]);

  useEffect(() => {
    setGanador('PC');
    onWin();
  }, [ pcScore == 3 ]);

  const onAddNamePlayer = ( namePlayer ) => {

    setIsReady(true);
    setPlayerName(namePlayer);
  }

  const onReset = () => {
    setIsReady(false);
    setResult(false);
    //setPlayerName('');
    setPcScore(0);
    setPlayerScore(0);
  }

  const onSelectPlayerOption = (playerSelection) => {
    const randomPcSelection = Math.floor(Math.random() * (3));
    if(playerSelection === randomPcSelection) {
      console.log('EMPATE');
    }
    if(mod(playerSelection - randomPcSelection, carts.length) < carts.length/2) {
      setPlayerScore(playerScore+1);
      console.log('ENTRO PLAYER', playerScore)
    } else {
      setPcScore(pcScore+1);
      console.log('ENTRO Pc', pcScore);
    }
  }

  const onWin = () => {
    setIsReady(false);
    setResult(true);
    setPcScore(0);
    setPlayerScore(0);
  }

  return (
    <div className="App">
      <button onClick={ onReset }> Reset </button>
      <FormComponent onNewPlayer={ onAddNamePlayer }></FormComponent>
      <ScoreBoardComponent isReady={ ready } pcScore={ pcScore } playerScore={ playerScore } playerName={ playerName }></ScoreBoardComponent>
      <SelectionComponent isReady={ ready } onSelectOption={ onSelectPlayerOption }></SelectionComponent>
      { result && <h1>EL GANADOR ES {ganador} </h1> }
    </div>
    
  );
}

export default App;
