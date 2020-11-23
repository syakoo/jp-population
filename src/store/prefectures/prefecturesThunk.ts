import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '@src/store/types'
import { changeStatus } from './prefecturesSlice'

// ____________________
//
interface PrefectruesRespError {
  statusCode: string
  message: string
  description: string
}

interface PrefecturesRespSuccess {
  message: null
  result: Prefecture[]
}

type PrefectureResp = PrefecturesRespSuccess | PrefectruesRespError

// ____________________
//
export const fetchPrefectures = createAsyncThunk<
  Prefecture[] | undefined,
  undefined,
  {
    state: RootState
    rejectValue: string
  }
>(
  'prefectures/fetchAll',
  async (_, { dispatch, getState, rejectWithValue }) => {
    const {
      prefectures: { loadingStatus },
    } = getState()
    if (loadingStatus !== 'IDLE') return

    dispatch(changeStatus({ status: 'PENDING' }))
    const respData: PrefectureResp = await fetch(
      `${process.env.API_ROOT}/prefectures`,
      {
        headers: { 'x-api-key': process.env.API_KEY || '' },
      }
    ).then((resp) => resp.json())

    if (respData.message !== null) {
      return rejectWithValue(respData.message)
    }
    return respData.result
  }
)
