import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mockPopulationAndYears } from './mockData'

// ____________________
//
type LoadingStatus = 'IDLE' | 'PENDING'

interface PopulationTransitionsState {
  populationTransitions: PopulationTransitionsPerPref
  loadingStatus: LoadingStatus
  errorMsg?: string
}

const initialState: PopulationTransitionsState = {
  populationTransitions: {},
  loadingStatus: 'IDLE',
}

// ____________________
//
const populationTransitionsSlice = createSlice({
  name: 'populationTransitions',
  initialState: initialState,
  reducers: {
    fetchData: (
      state,
      { payload: { prefCode } }: PayloadAction<{ prefCode: number }>
    ) => {
      let pref = state.populationTransitions[prefCode]
      if (!pref) {
        state.populationTransitions[prefCode] = mockPopulationAndYears
      }
    },
    changeStatus: (
      state,
      { payload: { status } }: PayloadAction<{ status: LoadingStatus }>
    ) => {
      state.loadingStatus = status
    },
  },
})

export const { fetchData, changeStatus } = populationTransitionsSlice.actions
export default populationTransitionsSlice.reducer
