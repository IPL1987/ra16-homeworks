import Stars from '../src/components/Stars';
import './App.css';

function App() {
  return (
    <div clcassName='cards'>
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
    </div>
  );
}

export default App;
