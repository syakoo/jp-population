import { createGlobalStyle } from 'styled-components'

// ____________________
//
export const theme = {
  primary: '#294e80',
  secondary: '#3063d4',
  white: '#fff',
  TranslucentWhite: '#ffffff75',
  gray: '#eee',
  gray2: '#aaa',
  gray3: '#454545',
  black: '#252525',
  red: '#ef0130',
  small: '700px',
}

export const GlobalStyle = createGlobalStyle<Theme>`
  body {
    background-color: ${(p) => p.theme.gray};
    color: ${(p) => p.theme.black};
    margin: 0px;
    font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
      Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN,
      メイリオ, Meiryo, ＭＳ Ｐゴシック, MS PGothic, sans-serif; 
  }
`

// ____________________
//
type Theme = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
