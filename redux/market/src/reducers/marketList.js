import { nanoid } from 'nanoid';
import { ADD_PRODUCT } from '../actions/actionsType';

const initial_state = [
  { id: nanoid(), title: 'Отдых в Турции', price: 65000, discount: 48000, image: `http://placeimg.com/180/200/any${nanoid(5)}` },
  { id: nanoid(), title: 'Отдых с тещей', price: 87000, discount: 0, image: `http://placeimg.com/180/200/any${nanoid(5)}` },
  { id: nanoid(), title: 'Отдых с пивом', price: 32000, discount: 24500, image: `http://placeimg.com/180/200/any${nanoid(5)}` },
  { id: nanoid(), title: 'Отдых в одиночестве', price: 57000, discount: 0, image: `http://placeimg.com/180/200/any${nanoid(5)}` },
  { id: nanoid(), title: 'Без отдыха', price: 47000, discount: 45300, image: `http://placeimg.com/180/200/any${nanoid(5)}` },
];

export default function marketListReducer(state = initial_state, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const {
        title,
        price,
        discount,
        image,
      } = action.payload;
      return [...state,
      {
        id: nanoid(),
        title,
        price: Number(price),
        discount: Number(discount),
        image,
      }
      ];
    }
    default:
      return state;
  }
}