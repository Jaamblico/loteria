//1) Soy de un país
// vertiginoso donde la lotería es parte principal de la realidad: hasta el día de hoy, he
// pensado tan poco en ella como en la conducta de los dioses indescifrables o de mi
// corazón.

// 2) Una jugada
// feliz podía motivar su elevación al concilio de magos o la prisión de un enemigo
// (notorio o íntimo) o el encontrar, en la pacífica tiniebla del cuarto, la mujer que
// empieza a inquietarnos o que no esperábamos rever; una jugada adversa: la
// mutilación, la variada infamia, la muerte.

// 3) En la realidad el número de sorteos es infinito. Ninguna
// decisión es final, todas se ramifican en otras. Los ignorantes suponen que infinitos
// sorteos requieren un tiempo infinito; en realidad basta que el tiempo sea
// infinitamente subdivisible, como lo enseña la famosa parábola del Certamen con la
// Tortuga. Esa infinitud condice de admirable manera con los sinuosos números del
// Azar y con el Arquetipo Celestial de la Lotería, que adoran los platónicos...

import * as React from 'react'

import * as Styled from './Quote.styled'
import { Container } from '../Container'

export function Quote({ quote }) {
  return (
    <Container>
      <Styled.Quote>{quote}</Styled.Quote>
    </Container>
  )
}
