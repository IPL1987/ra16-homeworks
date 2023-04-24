import { configureStore } from '@reduxjs/toolkit';
import counterReduser from '../slice/counter';
import photoDownloaderReduser from '../slice/photoDownloader';
import photoSelectedReduser from '../slice/photoSelect';

const store = configureStore({
  reducer: {
    counter: counterReduser,
    photoDownloader: photoDownloaderReduser,
    photoSelected: photoSelectedReduser
  }
})

export default store;