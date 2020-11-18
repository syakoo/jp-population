import { createSelector } from 'reselect'

import type { RootState } from './types'

// ____________________
//
export const prefecturesSelector = (state: RootState) =>
  state.prefectures.prefectures
export const populationTransitionsSelector = (state: RootState) =>
  state.populationTransitions.populationTransitions
