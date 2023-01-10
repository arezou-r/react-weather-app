import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className='Weather-box'>
              <header className="App-header">
                <a href='/' rel="">Lisbon</a>
                <a href='/' rel="">Paris</a>
                <a href='/' rel="">Sydney</a>
                <a href='/' rel="">San Francisco</a>
              </header>
              <Weather/>
            </div>
            <div className='open-source'>
              <a href='https://github.com/arezou-r/react-weather-app' target="_blank" rel="noreferrer">Open-source</a>
              <span> code, by Arezou Rouhi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
