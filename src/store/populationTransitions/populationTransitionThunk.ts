import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '@src/store/types'
import { fetchPopulationTransitionFromRESAS } from '@src/endpoints/resas'

// ____________________
//
export const fetchPopulationTransition = createAsyncThunk<
  { populationTransitions: PopulationAndYear[]; prefCode: number } | undefined,
  { prefCode: number },
  {
    state: RootState
    rejectValue: { msg: string; prefCode: number }
  }
>(
  'populationTransitions/fetch',
  async ({ prefCode }, { rejectWithValue }) => {
    const respData = await fetchPopulationTransitionFromRESAS(prefCode)

    if (respData.message !== null) {
      return rejectWithValue({ msg: respData.message, prefCode })
    }
    const totalPopulationsData = respData.result.data.find(
      (d) => d.label === '総人口'
    )?.data

    return (
      totalPopulationsData && {
        populationTransitions: totalPopulationsData,
        prefCode,
      }
    )
  },
  {
    condition: ({ prefCode }, { getState }) => {
      const {
        populationTransitions: { populationTransitions },
      } = getState()
      if (prefCode in populationTransitions) {
        return false
      }
    },
  }
)
