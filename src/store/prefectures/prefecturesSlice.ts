import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mockPrefectures } from './mockData'
import { fetchPrefectures } from './prefecturesThunk'

// ____________________
//
type LoadingStatus = 'IDLE' | 'PENDING'

interface PrefecturesState {
  prefectures: PrefectureWithSelection[]
  loadingStatus: LoadingStatus
  errorMsg?: string
}

const initialState: PrefecturesState = {
  prefectures: [],
  loadingStatus: 'IDLE',
}

// ____________________
//
const prefecturesSlice = createSlice({
  name: 'prefectures',
  initialState: initialState,
  reducers: {
    init: (state) => {
      if (state.loadingStatus !== 'IDLE') return

      const prefectures = mockPrefectures
      const prefectureWithSelection = prefectures.map(
        (pref): PrefectureWithSelection => ({ ...pref, selected: false })
      )

      state.prefectures = prefectureWithSelection
    },
    togglePref: (
      state,
      { payload: { prefCode } }: PayloadAction<{ prefCode: number }>
    ) => {
      let pref = state.prefectures.find((pref) => pref.prefCode === prefCode)
      if (pref) {
        pref.selected = !pref.selected
      }
    },
    changeStatus: (
      state,
      { payload: { status } }: PayloadAction<{ status: LoadingStatus }>
    ) => {
      state.loadingStatus = status
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPrefectures.fulfilled, (state, { payload }) => {
      state.loadingStatus = 'IDLE'
      if (payload) {
        const prefectureWithSelection = payload.map(
          (pref): PrefectureWithSelection => ({ ...pref, selected: false })
        )
        state.prefectures = prefectureWithSelection
      }
    }),
      builder.addCase(fetchPrefectures.rejected, (state, { payload }) => {
        state.loadingStatus = 'IDLE'
        if (payload) {
          state.errorMsg = payload
        }
      })
  },
})

export const { init, togglePref, changeStatus } = prefecturesSlice.actions
export default prefecturesSlice.reducer
