import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './stateSchema'
import { counterReducer } from 'entities/Counter/model/slice/counterSlice'

export const createReduxStore = () => {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer },
    devTools: _IS_DEV_
  })
}
