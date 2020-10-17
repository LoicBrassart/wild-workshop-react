import React from 'react';
import Character from './components/Character';
import "./reset.css";
import "./style.css";

const characters = ["A'misandra", "Lewto", "Nazuna", "Olber", "Zaldor"];

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <section id="gallery">
        {characters.map( (character)=>{
          return <Character name={character}/>
        } )}
      </section>
    </div>
  );
}

export default App;
