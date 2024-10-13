import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counter.slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
