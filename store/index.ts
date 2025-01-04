import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from './context/authSlice'
const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // counter: counterReducer,
    auth: authSlice,
    
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store