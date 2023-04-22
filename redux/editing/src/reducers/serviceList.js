import {nanoid} from 'nanoid'
import { ADD_SERVICE, REMOVE_SERVICE } from "../actions/actionsType";

const initialState = [
  { id: nanoid(), name: "Замена батареи", price: 2000 },
  { id: nanoid(), name: "Замена дисплея", price: 3000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      if (state.find((o) => o.name === name)) {
        return state.map((o) => {
          if (o.name === name) {
            return { ...o, price };
          }
          return o;
        });
      } else {
        return [...state, { id: nanoid(), name, price: Number(price) }];
      }
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);

    default:
      return state;
  }
}