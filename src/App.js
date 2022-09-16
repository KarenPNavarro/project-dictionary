import lookituplogo from "./lookituplogo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={lookituplogo} className="App-logo imf-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://karennavarro.io/" rel="noreferrer">
              Karen Navarro
            </a>{" "}
            and is Open-sourced on{" "}
            <a
              href="https://github.com/KarenPNavarro/project-dictionary"
              rel="noreferrer"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
