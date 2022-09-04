import * as React from "react";

import { Button } from "../../Components/Button";
import { AnimatedEther } from "../../Components/Icons/AnimatedEther";
import { Price } from "../../Components/Price";
import { Container } from "../../Components/Container";

import { useContractData } from "../../Context/ContractContext";

export const BuyAction = () => {
  const { ticketPrice: price } = useContractData();

  return (
    <Container>
      <>
        <Button
          id="button-container"
          name="Comprar Ticket"
          handleClick={() => console.log("BOTON")}
        />
        <Price price={price} /> <AnimatedEther width="20" />
      </>
    </Container>
  );
};
