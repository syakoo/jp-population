import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { mockPopulationAndYears } from './mockData'
import { fetchPopulationTransition } from './populationTransitionThunk'

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
    populationChangeStatus: (
      state,
      { payload: { status } }: PayloadAction<{ status: LoadingStatus }>
    ) => {
      state.loadingStatus = status
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopulationTransition.pending, (state) => {
      state.loadingStatus = 'PENDING'
    }),
      builder.addCase(
        fetchPopulationTransition.fulfilled,
        (state, { payload }) => {
          state.loadingStatus = 'IDLE'
          if (payload) {
            state.populationTransitions[payload.prefCode] =
              payload.populationTransitions
          }
        }
      ),
      builder.addCase(
        fetchPopulationTransition.rejected,
        (state, { payload }) => {
          state.loadingStatus = 'IDLE'
          if (payload) {
            state.errorMsg = payload
          }
        }
      )
  },
})

export const {
  fetchData,
  populationChangeStatus,
} = populationTransitionsSlice.actions
export default populationTransitionsSlice.reducer
