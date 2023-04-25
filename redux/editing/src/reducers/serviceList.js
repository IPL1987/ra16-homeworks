import { nanoid } from "nanoid";
import { ADD_SAVE_SERVICE, REMOVE_SERVICE } from "../actions/actionsType";

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 2000 },
  { id: nanoid(), name: 'Замена дисплея', price: 3000 },
  { id: nanoid(), name: 'Замена батареи', price: 1000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SAVE_SERVICE:
      const { name, price, id } = action.payload;
      const prevState = state.filter(o => o.id !== id);
      return [...prevState, { id: id || nanoid(), name, price: Number(price) }];
    case REMOVE_SERVICE:
      return state.filter(service => service.id !== action.payload.id);
    default:
      return state;
  }
}