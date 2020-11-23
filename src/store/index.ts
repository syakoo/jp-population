import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'

// ____________________
//
export const store = configureStore({
  reducer: rootReducer,
})
