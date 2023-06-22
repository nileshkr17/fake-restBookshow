import './App.css';
import Landing from './pages/Landing';
import Nav from './components/Nav';
// import { Card } from './components/Card';
import { Movies } from './components/Movies';
import Buy from './pages/Buy';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Movies/>
      <div className='p-6 text-center bg-black text-white'>Seat Booking</div>
      <Buy></Buy>

</div>
  );
}

export default App;
