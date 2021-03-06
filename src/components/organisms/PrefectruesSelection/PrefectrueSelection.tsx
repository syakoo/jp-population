import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ToggledDetails } from '@src/components/molecules/ToggledDetails'
import { CheckBox } from '@src/components/atoms/CheckBox'
import { togglePref } from '@src/store/prefectures/prefecturesSlice'
import { fetchPrefectures } from '@src/store/prefectures/prefecturesThunk'
import { fetchPopulationTransition } from '@src/store/populationTransitions/populationTransitionThunk'
import { LoadingSkeletons } from './LoadingSkeletons'

// ____________________
//
const PrefectureSelection: React.FC = () => {
  const { prefectures, loadingStatus } = useSelector(
    (state) => state.prefectures
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (prefectures.length === 0) {
      dispatch(fetchPrefectures())
    }
  }, [])

  return (
    <ToggledDetails summary="設定" initialState={true}>
      {prefectures.map(({ prefCode, prefName, selected }) => (
        <CheckBox
          key={prefCode}
          label={prefName}
          checked={selected}
          onChange={() => {
            dispatch(togglePref({ prefCode }))
            dispatch(fetchPopulationTransition({ prefCode }))
          }}
        />
      ))}
      {loadingStatus !== 'IDLE' && <LoadingSkeletons num={47} />}
    </ToggledDetails>
  )
}

// ____________________
//
export default React.memo(PrefectureSelection)
