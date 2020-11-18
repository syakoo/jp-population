import { createSelector } from 'reselect'

import {
  prefecturesSelector,
  populationTransitionsSelector,
} from '@src/store/reselector'

// ____________________
//
export const graphDataSelector = createSelector(
  prefecturesSelector,
  populationTransitionsSelector,
  (prefectures, populationTransitions) => {
    const selectedPrefectures = prefectures.filter((pref) => pref.selected)

    let graphDataValueParYear: {
      [year: number]: { [prefCode: number]: number }
    } = {}
    for (const { prefCode } of selectedPrefectures) {
      const data = populationTransitions[prefCode]
      if (!data) continue

      for (const { year, value } of data) {
        graphDataValueParYear = {
          ...graphDataValueParYear,
          [year]: { ...graphDataValueParYear[year], [prefCode]: value },
        }
      }
    }
    const prefNames = selectedPrefectures.reduce(
      (prev, curr) => ({
        ...prev,
        [curr.prefCode]: curr.prefName,
      }),
      {} as { [prefCode: number]: string }
    )

    return { graphDataValueParYear, prefNames }
  }
)
