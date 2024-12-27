// import logo from './logo.svg';
// import './App.css';
import Home from '../home/home.component'
import Nav from '../nav/nav.component';

function App() {
  return (
    <div className="site-wrap">
      <Nav />
      <Home />
      <header className="App-header">
        <p>
          This is a new site!
        </p>
      </header>
    </div>
  );
}

export default App;
