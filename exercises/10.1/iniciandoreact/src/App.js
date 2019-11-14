import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ['Comer', 'Beber', 'Dormir', 'Codar']
  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <ol>
        {arr.map(list => <li>{list}</li>)}
      </ol>
    </div>
  );
}

export default App;
