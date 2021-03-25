import './App.css';
import P9NLanguageList from './components/p9n/p9n-language-list';
import P9NBook from './components/p9n/p9n-book';
import P9NBookThumbnail from './components/p9n/p9n-book-thumbnail';
import LanguageHelpGrammar from './components/language/language-help-grammar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          parallesson<br />The Parrallel language reader.
        </p>
      </header>
      <P9NBookThumbnail />
      <P9NBook />
      <P9NLanguageList />
      <LanguageHelpGrammar />
    </div>
  );
}

export default App;
