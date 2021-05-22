import './styles/App.css';
import Logo from './assets/prnLogo.png'

function App() {
  return (
    <div className="App">
    <img src={Logo} alt='Logo'/>
    <h1>Hello World</h1>
    <button className='button'>sign up</button>
    </div>
  );
}
export default App;
