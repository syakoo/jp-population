import styled from 'styled-components'
import React from 'react'

import { _H1 } from '@src/components/atoms/Heading'
import { PopulationTransitionGraph } from '@src/components/organisms/PopulationTransitionGraph'
import { PrefectureSelection } from '@src/components/organisms/PrefectruesSelection'

// ____________________
//
const PTGraphBody: React.FC = () => (
  <_MainWrapper>
    <_H1>総人口推移グラフ</_H1>
    <PrefectureSelection />
    <PopulationTransitionGraph />
  </_MainWrapper>
)

// ____________________
//
const _MainWrapper = styled.div`
  margin: 2em 0px;
`

export default React.memo(PTGraphBody)
