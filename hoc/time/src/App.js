import './App.css';
import List from './components/List';

const list = [
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
    views: 18
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
    views: 65
  },
  {
    type: 'article',
    title: 'Невероятные события в неизвестном поселке...',
    views: 1203
  },
  {
    type: 'article',
    title: 'Секретные данные были раскрыты!',
    views: 1007
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
    views: 3253
  },
  {
    type: 'article',
    title: 'Кот Бегемот обладает невероятной...',
    views: 42,
  },
];

export default function App() {
  return (
    <List list={list} />
  );
} 