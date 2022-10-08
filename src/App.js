import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>

        <footer>
          <section>
            This project was coded by Jade Irons and is{" "}
            <a
              href="https://github.com/jadeirons/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-source.
            </a>
          </section>
        </footer>
      </div>
    </div>
  );
}

export default App;
