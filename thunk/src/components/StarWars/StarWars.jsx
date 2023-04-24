import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../slice/counter';
import Item from '../Item/Item';

function StarWars() {

  const facts = [
    'Прообразом Чубакки стал пёс режиссёра',
    'Актёрам разрешили подобрать любимый цвет для своих световых мечей',
    'В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину',
    'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу',
    'Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'
  ];

  const factsView = [];
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.valueLength)
  
  const handleChange = (e) => {
    const {value} = e.target;
    dispatch(actions.changeServiceField(value))
  }

  for (let i = 0; i < counter; i++) {
    factsView.push(facts[i]);
  }

  return (
    <>
      <div className="wrapper">
        <form className="form">
          <label className="label">
            <span className="text-input">Количество фактов</span>
            <input className="input" type="number" step="1" name="name" onChange={handleChange} min="0" max="5" value={counter} />
          </label>
        </form>
        <ul className="list">
          {factsView.map((a,i) => <Item key={i} num={i+1} text={a} />)}
        </ul>
      </div>
    </>
  )
}

export default StarWars;