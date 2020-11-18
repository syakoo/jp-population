import { createSelector } from 'reselect'

import type { RootState } from './types'

// ____________________
//
const prefecturesSelector = (state: RootState) => state.prefectures.prefectures
const populationTransitionsSelector = (state: RootState) =>
  state.populationTransitions.populationTransitions

export const selectedPopulationTransitionsSelector = createSelector(
  prefecturesSelector,
  populationTransitionsSelector,
  (prefectures, populationTransitions) => {
    return prefectures
      .filter((pref) => pref.selected)
      .map((pref) => {
        return populationTransitions.find((d) => d.prefCode === pref.prefCode)
      })
  }
)
