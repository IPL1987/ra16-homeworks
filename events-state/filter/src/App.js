import './App.css';
import Portfolio from './component/portfolio';
import data from './data';

export default function App() {
  return (
    <div className="portfolio">
      <Portfolio projects={data}/>
    </div>
  );
}