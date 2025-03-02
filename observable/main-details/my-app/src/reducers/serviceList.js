import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
} from "../actions/actionsType";

const initial_state = {
  items: [],
  loading: false,
  error: null,
};

export default function serviceListReducer(state = initial_state, action) {
  switch (action.type) {
    case FETCH_SERVICES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_SERVICES_FAILURE:
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case FETCH_SERVICES_SUCCESS:
      const { items } = action.payload;
      return { ...state, items, loading: false, error: null };
    default:
      return state;
  }
}