import React from 'react';
import './mystyles.scss'; 
import logoImg from './content/logo_2.png';

const App: React.FC = () => {
  const userName: string = `Mundo`;
  const messageToDisplay: string = `Hola ${userName} estilado con SASS`;

  return (
    <div className="app">
      <h1>{messageToDisplay}</h1>
      <div id="imgContainer">
        <img src={logoImg} alt="Logo" />
      </div>
    </div>
  );
};

console.log (`Api base: ${process.env.API_BASE}`);

export default App;
