import Title from "./Title";

/**
 * Компонент "Виджет"
 * Обеспечивает общее форматирование виджетов и вывод заголовка с помощью компонента Title
 * Принимает props:
 * - текст заголовка
 * - ссылка с заголовка
 */
export default function Widget(props) {
  const {title, link} = props;
  return (
    <div>
      <Title text={title} link={link}/>
      {props.children}
    </div>
  );
}