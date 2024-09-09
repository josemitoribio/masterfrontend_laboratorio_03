import React from 'react';
import './mystyles.scss'; 

const App: React.FC = () => {
  const userName: string = `Mundo`;
  const messageToDisplay: string = `Hola ${userName}, bienvenido a mi proyecto semilla.`;
  const messageToTechnology: string = `Trabajarás con Vite, SASS, Typescript y React.`;

  return (
    <div className="app">
      <h1>{messageToDisplay}</h1>
      <h3>{messageToTechnology}</h3>
    </div>
  );
};

export default App;
