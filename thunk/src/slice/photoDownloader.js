import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const photoDownloaderReduser = createSlice({
  name: "photoDownloader",
  initialState,
  reducers: {
    download(state, action) {
      if (action.payload) {
        state.unshift(action.payload);
      }
      return state
    }
  }
})

export const actionPhotos = photoDownloaderReduser.actions;
export default photoDownloaderReduser.reducer;