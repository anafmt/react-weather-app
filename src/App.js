
import './App.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brussels" />
        <footer>
          This project was coded by <a href='https://www.linkedin.com/in/ana-fm-tavares/' target='_blank' rel="noreferrer">Ana FM Tavares </a> and is 
          <a href='https://github.com/anafmt/react-weather-app' target='_blank' rel="noreferrer"> open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

;
