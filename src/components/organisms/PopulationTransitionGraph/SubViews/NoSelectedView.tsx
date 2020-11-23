import styled from 'styled-components'
import React from 'react'

// ____________________
//
const NoSelectedView: React.FC = () => (
  <_FloatDiv>
    <div>[設定] から都道府県を選択してください</div>
  </_FloatDiv>
)

// ____________________
//
const _FloatDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${(p) => p.theme.gray3};
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    font-size: 1.25rem;
    margin: auto;
    color: white;
  }
`

// ____________________
//
export default NoSelectedView
