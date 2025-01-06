import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from './context/authSlice'
import  devoteeSlice  from './context/devoteeSlice'
const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // counter: counterReducer,
    auth: authSlice,
    devotee : devoteeSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store