import styled from 'styled-components'
import React from 'react'

import ghLogo from '@src/assets/GitHub-Mark-32px.png'

// ____________________
//
const Header: React.FC = () => (
  <_Header>
    <_HeaderInner>
      <div>JP Population</div>
      <div>
        <a href="https://github.com/syakoo/jp-population">
          <_GHImg src={ghLogo} alt="github-link" />
        </a>
      </div>
    </_HeaderInner>
  </_Header>
)

// ____________________
//
const _Header = styled.header`
  background-color: ${(p) => p.theme.white};
  padding: 0.5em;
  font-size: 1.5rem;
  color: ${(p) => p.theme.primary};
  font-weight: bold;
  box-shadow: 1px 0px 8px 1px ${(p) => p.theme.gray2};
`
const _HeaderInner = styled.div`
  margin: 0px auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const _GHImg = styled.img`
  vertical-align: text-bottom;
  cursor: pointer;
`

export default Header
