import styled from 'styled-components'
import React from 'react'

// ____________________
//
const Header: React.FC = () => (
  <_Header>
    <div>JP Population</div>
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
`

export default Header
