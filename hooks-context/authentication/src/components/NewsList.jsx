import { useContext } from 'react';
import Context from '../Context';
import useJsonFetch from '../hooks/useJsonFetch';
import News from './News';

export default function NewsList() {
  const { token } = useContext(Context);

  const [data, loading] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}news`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  return (
    <div className="news-list">
      {loading && (<div className="newsList__loading">Загрузка...</div>)}
      {!loading && data && (
        data.map((item) => <News key={item.id} data={item} />)
      )}
    </div>
  );
}