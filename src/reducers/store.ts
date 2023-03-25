import { Action, combineReducers } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

const reducers = combineReducers({

})

const store = configureStore({
  reducer: reducers
})

type RootReducerType = typeof reducers
export type RootStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>

export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>
export type AppDispatch = typeof store.dispatch


export default reducers