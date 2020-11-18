import React from 'react'

import { ToggledDetails } from '@src/components/molecules/ToggledDetails'

// ____________________
//
const PrefectureSelection: React.FC = () => {
  return (
    <ToggledDetails summary="設定">
      <div>ここに県の選択</div>
    </ToggledDetails>
  )
}

// ____________________
//
export default PrefectureSelection
