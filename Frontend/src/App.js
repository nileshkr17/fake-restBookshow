import './App.css';
import Landing from './pages/Landing';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-4 ">
  Save changes
</button>
</div>
  );
}

export default App;
