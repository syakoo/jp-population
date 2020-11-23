import { Store } from 'redux'

import rootReducer from './rootReducer'
import { store } from './'

// ____________________
//
export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
  export function useDispatch<TDispatch = RootDispatch>(): TDispatch
  export function useStore<S = DefaultRootState>(): Store<S>
}
