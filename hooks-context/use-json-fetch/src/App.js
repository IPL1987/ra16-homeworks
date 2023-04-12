import './App.css';
import { Data } from './components/Data';

export default function App() {
  return (
    <div>
      <Data endpoint="data" title="Get Data" />
      <Data endpoint="error" title="Error Data" />
      <Data endpoint="loading" title="Loading Data" />
    </div>
  );
}