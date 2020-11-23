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
  loadingPrefCodes: number[]
}

const initialState: PopulationTransitionsState = {
  populationTransitions: {},
  loadingStatus: 'IDLE',
  loadingPrefCodes: [],
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
    builder.addCase(fetchPopulationTransition.pending, (state, action) => {
      state.loadingStatus = 'PENDING'
      state.loadingPrefCodes.push(action.meta.arg.prefCode)
    }),
      builder.addCase(
        fetchPopulationTransition.fulfilled,
        (state, { payload }) => {
          // NOTE: O(n) なので懸念点
          state.loadingPrefCodes = state.loadingPrefCodes.filter(
            (prefCodes) => prefCodes !== payload?.prefCode
          )
          if (state.loadingPrefCodes.length === 0) {
            state.loadingStatus = 'IDLE'
          }
          if (payload) {
            state.populationTransitions[payload.prefCode] =
              payload.populationTransitions
          }
        }
      ),
      builder.addCase(
        fetchPopulationTransition.rejected,
        (state, { payload }) => {
          // NOTE: O(n) なので懸念点
          state.loadingPrefCodes = state.loadingPrefCodes.filter(
            (prefCodes) => prefCodes !== payload?.prefCode
          )
          if (state.loadingPrefCodes.length === 0) {
            state.loadingStatus = 'IDLE'
          }
          if (payload) {
            state.errorMsg = payload.msg
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
