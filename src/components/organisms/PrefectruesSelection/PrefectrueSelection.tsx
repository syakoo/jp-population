import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ToggledDetails } from '@src/components/molecules/ToggledDetails'
import { CheckBox } from '@src/components/atoms/CheckBox'
import { init, togglePref } from '@src/store/prefectures/prefecturesSlice'
import { fetchData } from '@src/store/populationTransitions/populationTransitionSlice'

// ____________________
//
const PrefectureSelection: React.FC = () => {
  const { prefectures } = useSelector((state) => state.prefectures)
  const dispatch = useDispatch()

  useEffect(() => {
    if (prefectures.length === 0) {
      dispatch(init())
    }
  }, [])

  return (
    <ToggledDetails summary="設定">
      {prefectures.map(({ prefCode, prefName, selected }) => (
        <CheckBox
          key={prefCode}
          label={prefName}
          checked={selected}
          onChange={() => {
            dispatch(togglePref({ prefCode }))
            dispatch(fetchData({ prefCode }))
          }}
        />
      ))}
    </ToggledDetails>
  )
}

// ____________________
//
export default PrefectureSelection
