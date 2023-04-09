import './App.css';
import React from 'react';
import Month from './components/Month';
import Year from './components/Year';
import Sorted from './components/Sorted';
import withFormat from './components/WithFormat';

const MonthWithFormat = withFormat(Month, 'month', 'MMM');
const YearWithFormat = withFormat(Year, 'year', 'YYYY');
const SortWithFormat = withFormat(Sorted, false, 'YYYY-MM-DD');

// TODO:
// 1. Загрузите данные с помощью fetch: https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json
// 2. Не забудьте вынести URL в переменные окружения (не хардкодьте их здесь)
// 3. Положите их в state

export default class App extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json')
      .then(response => response.json())
      .then(data => this.setState(data));
  }

  render() {
    const { list } = this.state;
    return (
      <div id="app">
        <MonthWithFormat list={list} />
        <YearWithFormat list={list} />
        <SortWithFormat list={list} />
      </div>
    );
  }
}