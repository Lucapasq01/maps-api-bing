import logo from './logo.svg';
import './App.css';
import BingMap from './components/bingmaps-react/BingMapsReact'
import Form from './components/form-react/Form';
import Form1 from './components/latitudine/Latitudine';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BingMap/>
        <Form1/>
        <Form/>
      </header>
      
    </div>
  );
}

export default App;
