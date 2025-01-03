import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // counter: counterReducer,
    
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store