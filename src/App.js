import './App.css';
import Result from './components/main/Result';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <div className='App'>
      <div className='App-wrapper'>
        <NavBar />
        <Result />
      </div>
    </div>
  );
}

export default App;
