import { createAsyncThunk } from '@reduxjs/toolkit'

import type { RootState } from '@src/store/types'
import { fetchPrefecturesFromRESAS } from '@src/endpoints/resas'
import { changeStatus } from './prefecturesSlice'

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
    const respData = await fetchPrefecturesFromRESAS()

    if (respData.message !== null) {
      return rejectWithValue(respData.message)
    }
    return respData.result
  }
)
