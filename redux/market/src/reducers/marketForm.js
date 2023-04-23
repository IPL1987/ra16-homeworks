import { nanoid } from 'nanoid';
import { CHANGE_PRODUCT_FORM, RESET_PRODUCT_FORM } from "../actions/actionsType";

const initial_state = {
  title: '',
  price: '',
  discount: '',
  image: `http://placeimg.com/200/200/any${nanoid(5)}`,
};

export default function marketFormReducer(state = initial_state, action) {
  switch (action.type) {
    case CHANGE_PRODUCT_FORM:
      const { name, value } = action.payload;
      return {...state, [name]: value};
    case RESET_PRODUCT_FORM:
      return initial_state;
    default:
      return state;
  }
}
