import { configureStore } from '@reduxjs/toolkit'
import tmdbSlice from './tmdbSlice';


export default configureStore({
  reducer: {
    tmdb: tmdbSlice,

  }

})

