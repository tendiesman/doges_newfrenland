import logo from './logo.svg';
import './App.css';
import Typewriter from 'typewriter-effect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://bdhjwyivindi2bhlnotszwj5i3vmgfs2iacouud54s5l5bdn54.arweave.net/CM-6bYRVDRo0E62unLNk9RurDFlpABOpQfeS6voRt78?ext=png'} alt="logo" />
        <p>
          <Typewriter 
            onInit={(typewriter) => {
              typewriter.typeString("Hello! I will be your companion for this trip.").start();
            }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Journey to Newfrenland
        </a>
      </header>
    </div>
  );
}

export default App;