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

    let graphDataValuePerYearDict: {
      [year: number]: { [prefCode: number]: number }
    } = {}
    for (const { prefCode } of selectedPrefectures) {
      const data = populationTransitions[prefCode]
      if (!data) continue

      for (const { year, value } of data) {
        graphDataValuePerYearDict = {
          ...graphDataValuePerYearDict,
          [year]: { ...graphDataValuePerYearDict[year], [prefCode]: value },
        }
      }
    }
    // const prefNames = selectedPrefectures.reduce(
    //   (prev, curr) => ({
    //     ...prev,
    //     [curr.prefCode]: curr.prefName,
    //   }),
    //   {} as { [prefCode: number]: string }
    // )
    let graphDataValuePerYear: {
      [prefCode: number]: number
      year: number
    }[] = []
    for (const yearStr in graphDataValuePerYearDict) {
      graphDataValuePerYear.push({
        ...graphDataValuePerYearDict[yearStr],
        year: +yearStr,
      })
    }

    return { graphDataValuePerYear, selectedPrefectures }
  }
)
