import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Its Ecabott Time!</p>
        <a
          className="App-link"
          href="https://www.github.com/ecabott"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ecabott's Github
        </a>
      </header>
    </div>
  );
}

export default App;
