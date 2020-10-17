import React from 'react';
import Character from './components/Character';
import "./reset.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <section id="gallery">
        <Character name="Lewto"/>
      </section>
    </div>
  );
}

export default App;
