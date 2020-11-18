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
      .map(
        (pref): PopulationTransitionsPerPrefWithName => {
          return {
            data: [],
            prefCode: pref.prefCode,
            prefName: pref.prefName,
            ...populationTransitions.find((d) => d.prefCode === pref.prefCode),
          }
        }
      )
  }
)
