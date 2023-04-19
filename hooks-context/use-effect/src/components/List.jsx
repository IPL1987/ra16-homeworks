import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function List({ selectUser }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'}users.json`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <ul className="list">
      {isError && <li className="list-item">Ошибка загрузки</li>}
      {isLoading && <li className="list-item">Loading...</li>}
      {users.map((item) => {
        return <li key={item.id} className="list-item" onClick={selectUser(item)}>{item.name}</li>
      })}
    </ul>
  );
}

List.propTypes = {
  selectUser: PropTypes.func.isRequired,
}