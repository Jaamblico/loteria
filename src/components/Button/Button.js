import * as React from "react";
import ReactAnime from "react-animejs";
import * as Styled from "./Button.styled";

const { Anime, stagger } = ReactAnime;

export function Button({ id, name }) {
  function comprarTicket() {
    console.log("click");
  }

  return (
    <Anime
      initial={[
        {
          targets: `#${id}`,
          translateY: 1000,
          easing: "linear",
        },
        {
          targets: `#${id}`,
          translateY: 0,
          easing: "linear",
          duration: 3000,
        },
      ]}
    >
      <Styled.ButtonContainer id={id}>
        <Styled.Button onClick={() => comprarTicket()}>{name}</Styled.Button>
      </Styled.ButtonContainer>
    </Anime>
  );
}
