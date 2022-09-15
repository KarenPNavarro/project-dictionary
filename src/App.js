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
          <small>Coded by Karen Navarro</small>
        </footer>
      </div>
    </div>
  );
}
