import { combineReducers } from 'redux'

import prefectureReducer from './prefectures/prefecturesSlice'
import populationTransitionsSlice from './populationTransitions/populationTransitionSlice'

// ____________________
//
export default combineReducers({
  prefectures: prefectureReducer,
  populationTransitions: populationTransitionsSlice,
})
