import Service from './Items/Service';

/**
 * Компонент "Блок поисковой строки"
 * Выводит логотип, поисковую строку, подпись к поисковой строке
 * Выводит перечень ссылок на внутренние сервисы через перечисляемый компонент Service
 */
export default function Search() {
  return (
    <div>
      <div className="logo" />
      <Service />
      <div className="searchBar" />
      <div className="subtitle" />
    </div>
  );
}