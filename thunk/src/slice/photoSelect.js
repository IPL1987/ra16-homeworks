import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

const photoSelectedReduser = createSlice({
  name: "photoSelected",
  initialState,
  reducers: {
    select(state, action) {
      if (action.payload) state.value = action.payload
      else state.value = null;
    }
  }
})

export const actionPhoto = photoSelectedReduser.actions;
export default photoSelectedReduser.reducer;