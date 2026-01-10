import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [welcome, setWelcome] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    const apiBase = process.env.REACT_APP_API_URL || '';

    fetch(`${apiBase}/Welcome`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.text();
      })
      .then((text) => {
        if (isMounted) {
          setWelcome(text);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Failed to load welcome message.');
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {error ? <h4>{error}</h4> : <h4>{welcome || 'Loading...'}</h4>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
