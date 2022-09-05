import * as React from 'react'

import * as Styled from './Button.styled'

// import ReactAnime from "react-animejs";

export function Button({ id, name, handleClick }) {
  // const { Anime } = ReactAnime;

  return (
    // <Anime
    //   initial={[
    //     {
    //       targets: `#${id}`,
    //       translateY: 1000,
    //       easing: "linear",
    //     },
    //     {
    //       targets: `#${id}`,
    //       translateY: 0,
    //       easing: "linear",
    //       duration: 3000,
    //     },
    //   ]}
    // >
    <Styled.ButtonContainer id={id}>
      <Styled.Button onClick={handleClick}>{name}</Styled.Button>
    </Styled.ButtonContainer>
    // </Anime>
  )
}
