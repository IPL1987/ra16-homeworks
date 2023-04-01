import Widget from "./Widget";
import Weather from "./Weather";
import Favorites from "./Items/Favorites";
import Tv from "./Items/Tv";
import Broadcast from "./Items/Broadcast";

/**
 * Компонент "Блок дополнительных виджетов"
 * Обеспечивает вывод виджетов в три колонки с помощью компонента Widget
 * Выводит виджет "Погода" с помощью компонента Weather
 * Выводит виджет "Посещаемое" через перечисляемый компонент Favorites
 * Выводит виджет "Карта"
 * Выводит виджет "Телепрограмма" через перечисляемый компонент Tv
 * Выводит виджет "Эфир" через перечисляемый компонент Broadcast
 */
export default function WidgetsList() {
  return (
    <section>
      <Widget title="Погода">
        <Weather />
      </Widget>
      <Widget title="Посещаемое">
        <Favorites />
      </Widget>
      <Widget title="Карта Германии">
        Расписания
      </Widget>
      <Widget title="Телепрограмма">
        <Tv />
      </Widget>
      <Widget title="Эфир">
        <Broadcast />
      </Widget>
    </section>
  );
}
