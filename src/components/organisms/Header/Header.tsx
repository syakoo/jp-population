import styled from 'styled-components'
import React from 'react'

import ghLogo from '@src/assets/GitHub-Mark-32px.png'

// ____________________
//
const Header: React.FC = () => (
  <_Header>
    <div>JP Population</div>
    <div>
      <a href="https://github.com/syakoo/jp-population">
        <_GHImg src={ghLogo} alt="github-link" />
      </a>
    </div>
  </_Header>
)

// ____________________
//
const _Header = styled.header`
  background-color: ${(p) => p.theme.primary};
  padding: 0.5em;
  font-size: 1.5rem;
  color: ${(p) => p.theme.white};
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const _GHImg = styled.img`
  vertical-align: text-bottom;
  cursor: pointer;
`

export default Header
