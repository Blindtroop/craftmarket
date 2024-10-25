import logo from './logo.svg';
import './App.css';
import  Hero  from './components/hero/hero'
import  Navbar  from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
