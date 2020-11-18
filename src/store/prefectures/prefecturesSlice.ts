import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mockPrefectures } from './mockData'

// ____________________
//
interface PrefecturesState {
  prefectures: PrefectureWithSelection[]
  status: 'READY' | 'PENDING' | 'REGECTED'
}

const initialState: PrefecturesState = {
  prefectures: [],
  status: 'READY',
}

// ____________________
//
const prefecturesSlice = createSlice({
  name: 'prefectures',
  initialState: initialState,
  reducers: {
    init: (state) => {
      if (state.status !== 'READY') return

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
  },
})

export const { init, togglePref } = prefecturesSlice.actions
export default prefecturesSlice.reducer
