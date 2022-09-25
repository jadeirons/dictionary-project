import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by Jade Irons and is{" "}
          <a href="https://github.com/jadeirons/dictionary-project">
            open-source.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
