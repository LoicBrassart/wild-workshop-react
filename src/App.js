import React from 'react';
import "./style.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <section id="gallery">
        <article className="character">
          <img className="background" src="/img/backgrounds/outdoor-1.jpg" />
          <img className="figure" src="/img/adventurers/amisandra/1-f.png" />
          <footer>
            <h3>A'misandra</h3>
          </footer>
        </article>
      </section>
    </div>
  );
}

export default App;
