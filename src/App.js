import './App.scss';
import { NavBarPc } from './components/NavBarPc/NavBarPc';
import { Home } from './pages/Home'

function App() {

  return (
    <div id="app" className='background text'>
        <NavBarPc />
        <Home />
    </div>
  );
}

export default App;
