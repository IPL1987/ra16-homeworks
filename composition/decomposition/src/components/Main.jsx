import News from "./News";
import Promo from "./Promo";
import Search from "./Search";
import Banner from './Banner';
import WidgetsList from "./WidgetsList";

/**
 * Основной компонент страницы
 * Объединяет компоненты:
 * - News (Новости)
 * - PromoWidget (Промо-баннер внутреннего сервиса)
 * - Search (Блок поисковой строки)
 * - Banner (Рекламный баннер)
 * - WidgetsList (Блок дополнительных виджетов)
 */
export default function Main() {
  return (
    <main>
      <News />
      <Promo />
      <Search />
      <Banner />
      <WidgetsList />
    </main>
  );
}