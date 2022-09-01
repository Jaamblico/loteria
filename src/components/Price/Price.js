import * as React from "react";
import * as Styled from "./Price.styled";

export function Price({ price }) {
  return (
    <Styled.PriceContainer>
      <Styled.Price>{price}</Styled.Price>
    </Styled.PriceContainer>
  );
}
