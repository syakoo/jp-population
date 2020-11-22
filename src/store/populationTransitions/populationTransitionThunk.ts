import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '@src/store/types'
import { populationChangeStatus } from './populationTransitionSlice'

// ____________________
//
interface PopulationTransitionRespError {
  statusCode: string
  message: string
  description: string
}

interface PopulationTransitionRespSuccess {
  message: null
  result: {
    boundaryYear: number
    data: {
      label: string
      data: PopulationAndYear[]
    }[]
  }
}

type PopulationTransitionResp =
  | PopulationTransitionRespSuccess
  | PopulationTransitionRespError

// ____________________
//
export const fetchPopulationTransition = createAsyncThunk<
  { populationTransitions: PopulationAndYear[]; prefCode: number } | undefined,
  { prefCode: number },
  {
    state: RootState
    rejectValue: string
  }
>(
  'populationTransitions/fetch',
  async ({ prefCode }, { rejectWithValue }) => {
    const respData: PopulationTransitionResp = await fetch(
      `${process.env.API_ROOT}/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
      {
        headers: { 'x-api-key': process.env.API_KEY || '' },
      }
    ).then((resp) => resp.json())

    if (respData.message !== null) {
      return rejectWithValue(respData.message)
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
        populationTransitions: { loadingStatus, populationTransitions },
      } = getState()
      if (loadingStatus !== 'IDLE' || prefCode in populationTransitions) {
        return false
      }
    },
  }
)
