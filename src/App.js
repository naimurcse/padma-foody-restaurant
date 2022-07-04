import logo from './logo.svg';
import './App.css';
import Restaurant from './components/Restaurant/Restaurant';
import Header from './components/Header/Header';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Restaurant></Restaurant>
      <FAQ></FAQ>
    </div>
  );
}

export default App;
