import { createGlobalStyle } from 'styled-components'
import RobotoMono from './fonts/RobotoMono-Regular.ttf'

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Mono';
  src: url(${RobotoMono}) format('ttf');
}
*{ font-family : 'Roboto Mono', monospace}
`

export default FontStyles
