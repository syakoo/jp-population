import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mockPopulationAndYears } from './mockData'

// ____________________
//
interface PopulationTransitionsState {
  populationTransitions: PopulationTransitionsPerPref
  status: 'READY' | 'PENDING' | 'REGECTED'
}

const initialState: PopulationTransitionsState = {
  populationTransitions: {},
  status: 'READY',
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
  },
})

export const { fetchData } = populationTransitionsSlice.actions
export default populationTransitionsSlice.reducer
