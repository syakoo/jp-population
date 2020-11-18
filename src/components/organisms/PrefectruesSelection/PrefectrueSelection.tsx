import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ToggledDetails } from '@src/components/molecules/ToggledDetails'
import { init, togglePref } from '@src/store/prefectures/prefecturesSlice'

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
        <span key={prefCode}>
          <label>
            <input
              type="checkbox"
              checked={selected}
              onChange={() => dispatch(togglePref({ prefCode }))}
            />
            {prefName}
          </label>
        </span>
      ))}
    </ToggledDetails>
  )
}

// ____________________
//
export default PrefectureSelection
