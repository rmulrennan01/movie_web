import { configureStore } from '@reduxjs/toolkit'
import tmdbSlice from './tmdbSlice';
//import nonFocusSlice from './nonFocusSlice';
//import typeSlice  from './typeSlice';
//import motionSlice from './motionSlice';


export default configureStore({
  reducer: {
    tmdb: tmdbSlice,

  }

})

