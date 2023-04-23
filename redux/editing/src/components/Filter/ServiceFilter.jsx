import { useSelector, useDispatch } from "react-redux";
import { changeFilterField } from "../../actions/actionsCreate";

export default function ServiceFilter(items) {
  const filter = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(changeFilterField(value, items));
  }

  return (
    <div>
      Фильтр:
      <input name="filter" onChange={handleChange} value={filter.value} />
    </div>
  );
}