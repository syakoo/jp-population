import styled from 'styled-components'
import React from 'react'

// ____________________
//
const Footer: React.FC = () => (
  <_Footer>
    <_FooterInner>
      <_Refs>
        このグラフは
        <_Link href="https://opendata.resas-portal.go.jp/">
          RESAS（地域経済分析システム）
        </_Link>
        のデータを使用しています
      </_Refs>
      <_Title>JP Population</_Title>
    </_FooterInner>
  </_Footer>
)

// ____________________
//
const _Footer = styled.footer`
  background-color: ${(p) => p.theme.gray2};
  padding: 0.5rem;
  color: ${(p) => p.theme.gray3};
  margin-top: auto;
`

const _FooterInner = styled.div`
  margin: 0px auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: right;
`

const _Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;
`

const _Refs = styled.div`
  font-size: 0.9rem;
  text-align: right;
`

const _Link = styled.a`
  color: ${(p) => p.theme.secondary};
  margin: 0px 2px;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

// ____________________
//
export default Footer
