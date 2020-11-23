import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '@src/store/types'

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
    rejectValue: { msg: string; prefCode: number }
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
