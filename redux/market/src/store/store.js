import { createStore, combineReducers } from 'redux';
import marketFormReducer from '../reducers/marketForm';
import marketListReducer from '../reducers/marketList';

const reducer = combineReducers({
  marketList: marketListReducer,
  marketForm: marketFormReducer,
});

const store = createStore(reducer);

export default store;