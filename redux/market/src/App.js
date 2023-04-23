import './App.css';
import MarketForm from './components/MarketForm';
import MarketList from './components/MarketList';

function App() {
  return (
    <div className="Market">
      <MarketList />
      <MarketForm />
    </div>
  );
}

export default App;