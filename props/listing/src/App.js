import Listing from './components/Listing.jsx';
import './css/main.css';
import data from './data/etsy.json'

function App() {
  return (
  <div className='pp'>
    <Listing items={data} />
  </div>
  );
}

export default App;
