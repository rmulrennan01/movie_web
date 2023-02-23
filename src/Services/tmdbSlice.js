import { createSlice, createSelector } from '@reduxjs/toolkit'


export const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState: {
    primary: null,
    secondary: null,
  
  },
  reducers: {
    setPrimary: (state, action) =>{
        state.primary = action.payload
    },

  },
})





// Action creators are generated for each case reducer function
export const { setPrimary} = tmdbSlice.actions

export default tmdbSlice.reducer