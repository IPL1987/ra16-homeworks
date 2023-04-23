import { useSelector, useDispatch } from 'react-redux';
import { addProduct, changeProductForm, resetProductForm } from "../actions/actionsCreate";

export default function MarketForm() {
  const form = useSelector((state) => state.marketForm);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(
      form.title,
      form.price,
      form.discount,
      form.image,
    ));
    dispatch(resetProductForm());
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(changeProductForm(name, value));
  }

  const handleReset = () => {
    dispatch(resetProductForm());
  }

  return (
    <div className="MarketForm">
      <h2>Добавить новый тур</h2>
      <form className="MarketForm__form" onSubmit={handleSubmit}>
        <label>
          <div className="MarketForm__label">Название товара</div>
          <input
            className="MarketForm__input"
            name="title"
            onChange={handleChange}
            value={form.title}
            required
          />
        </label>
        <label>
          <div className="MarketForm__label">Цена</div>
          <input
            className="MarketForm__input"
            name="price"
            onChange={handleChange}
            value={form.price}
            required
          />
        </label>
        <label>
          <div className="MarketForm__label">Цена со скидкой</div>
          <input
            className="MarketForm__input"
            name="discount"
            onChange={handleChange}
            value={form.discount}
          />
        </label>
        <label>
          <div className="MarketForm__label">Ссылка на фото товара</div>
          <input
            className="MarketForm__input"
            name="image"
            onChange={handleChange}
            value={form.image}
            required
          />
        </label>
        <div className="MarketForm__controls">
          <button type="submit">Добавить</button>
          <button type="reset" onClick={handleReset}>Сбросить</button>
        </div>
      </form>
    </div>
  )
}
