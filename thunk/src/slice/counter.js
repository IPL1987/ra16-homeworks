import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  valueLength: 5,
};

const counterReduser = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeServiceField(state, action) {
      if (action.payload < 0) state.valueLength = 1
      else if (action.payload > 5) state.valueLength = 5
      else state.valueLength = action.payload;
    }
  }
})

export const actions = counterReduser.actions;
export default counterReduser.reducer;