import './App.css';
import LanguageList from './components/language/language-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          parallesson<br />The Parrallel language reader.
        </p>
        <LanguageList />
      </header>
    </div>
  );
}

export default App;
