import logo from './logo.svg';
import './App.css';
import Typewriter from 'typewriter-effect'
import logo2 from './logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo2} className="logoo" alt="name"/>
        <img src={'https://bdhjwyivindi2bhlnotszwj5i3vmgfs2iacouud54s5l5bdn54.arweave.net/CM-6bYRVDRo0E62unLNk9RurDFlpABOpQfeS6voRt78?ext=png'} className="App-logo" alt="logo" />
        <p>
          <Typewriter options={{
          delay: 60,
          }}
            onInit={(typewriter) => {
              typewriter.typeString("Hello and gm! We're here to be your Web3 best friend.").start();
            }}
          />
        </p>
        <a
          className="App-link"
          href="https://magiceden.io/marketplace/doges_unleashed"
          target="_blank"
          rel="noopener noreferrer"
        >
          Magic Eden Marketplace
        </a>

      </header>
      <div
  style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
>
  <div style={{flex: 1, height: '10px', backgroundColor: 'cyan'}} />

  <div style={{flex: 1, height: '10px', backgroundColor: 'cyan'}} />
</div>
<header className="About Us">One day at a time...</header>

    </div>
    
  );
}

export default App;
