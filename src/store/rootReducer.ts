import { combineReducers } from 'redux'

import prefectureReducer from './prefectures/prefecturesSlice'

// ____________________
//
export default combineReducers({
  prefectures: prefectureReducer,
})
